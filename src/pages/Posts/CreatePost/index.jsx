import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { Button, TextInput, Textarea } from "@tremor/react";
import Swal from "sweetalert2";
import { useLocation } from "wouter";
import { useCreatePost } from "../../../hooks/usePosts";
import useStore from "../../../store/useStore";

const Post = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();
  const user = useStore((state) => state.user);
  const createPostMutation = useCreatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => {
    setIsOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    if (!user) {
      Swal.fire({
        title: "Error!",
        text: "Debes iniciar sesión para crear un post",
        icon: "error",
        confirmButtonText: "Entendido",
      }).then(() => {
        setLocation("/login");
      });
      return;
    }

    createPostMutation.mutate(
      {
        title: data.title,
        content: data.content,
        userId: user.userId,
      },
      {
        onSuccess: () => {
          closeDialog();
          Swal.fire({
            icon: "success",
            title: "Post creado correctamente",
            timer: 1500,
            showConfirmButton: false,
          });
        },
      }
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">
          ¡Bienvenido {user ? user.username : "Invitado"}!
        </span>
        <Button color="orange" onClick={openDialog}>
          Subir un nuevo post
        </Button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={closeDialog} className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                  <Dialog.Title
                    as="h2"
                    className="text-xl font-bold leading-6 text-gray-900">
                    Subir un nuevo post
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="title">
                        Título
                      </label>
                      <TextInput
                        id="title"
                        name="title"
                        placeholder="Título del post"
                        {...register("title", {
                          required: "El título es obligatorio",
                        })}
                        className="w-full"
                      />
                      {errors.title && (
                        <span className="text-red-500 text-sm">
                          {errors.title.message}
                        </span>
                      )}
                    </div>
                    <div className="mt-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="content">
                        Cuerpo
                      </label>
                      <Textarea
                        id="content"
                        name="content"
                        placeholder="Cuerpo del post"
                        {...register("content", {
                          required: "El cuerpo es obligatorio",
                          maxLength: {
                            value: 255,
                            message:
                              "El cuerpo no puede tener más de 255 caracteres",
                          },
                        })}
                        className="w-full"
                        rows="6"
                      />
                      {errors.content && (
                        <span className="text-red-500 text-sm">
                          {errors.content.message}
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button
                        type="submit"
                        className="mr-2"
                        color="orange"
                        disabled={createPostMutation.isPending}
                        isLoading={createPostMutation.isPending}>
                        Publicar
                      </Button>
                      <Button onClick={closeDialog} color="gray" type="button">
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Post;
