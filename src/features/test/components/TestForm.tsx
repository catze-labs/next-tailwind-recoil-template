import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSignMessage } from "wagmi";
import * as yup from "yup";

type Inputs = {
  title: string;
  content: string;
};

const schema = yup.object({
  title: yup.string().required("Title must be required."),
  content: yup
    .string()
    .required()
    .min(5, "Content should be over 5 characters")
    .max(30, "Content should be less 30 characters"),
});

const TestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { signMessage } = useSignMessage({
    onSuccess: (result) => {
      console.log(result);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data: Inputs) => {
    signMessage({
      message: `title: ${data.title}, content: ${data.content}`,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-4"}>
      <div className={"flex flex-col gap-2"}>
        <label className={"text-gray-300 text-xs"}>Title</label>
        <input
          defaultValue="test"
          {...register("title")}
          className={"border border-blue-400 rounded-sm px-2 py-1"}
        />
        {errors.title && (
          <span className={"text-red-400 text-xs"}>{errors.title.message}</span>
        )}
      </div>
      <div className={"flex flex-col gap-2"}>
        <label className={"text-gray-300 text-xs"}>Content</label>
        <input
          {...register("content", { required: true })}
          className={"border border-blue-400 rounded-sm px-2 py-1"}
          defaultValue={"hello worlds"}
        />
        {errors.content && (
          <span className={"text-red-400 text-xs"}>
            {errors.content.message}
          </span>
        )}
      </div>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-xl font-bold"
        onClick={() => signMessage()}
      >
        Sign Messages
      </button>
    </form>
  );
};

export default TestForm;
