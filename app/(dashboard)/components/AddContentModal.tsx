// "use client";

// import { useMutation } from "@tanstack/react-query";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";


// const ContentSchema = z.object({
//   title: z.string().min(1, "Title is required"),
//   description: z.string().optional(),
//   status: z.enum(["PENDING", "WORKING ON", "DONE"]),
// });

// export type ContentFormValues = z.infer<typeof ContentSchema>;

// interface AddTaskModalProps {
//   onClose: () => void;
// }

// export default function AddContentModal({ onClose }: AddTaskModalProps) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ContentFormValues>({
//     resolver: zodResolver(ContentSchema),
//     defaultValues: {
//       status: "PENDING",
//     },
//   });

//   const mutation = useMutation({
//     mutationFn: (data: ContentFormValues) =>
//      await fetch('/api/content', {
//         method: 'POST',
        
//      })
//     onSuccess: () => {
//       onClose();
//     },
//   });

//   const onSubmit = (data: TaskFormValues) => {
//     mutation.mutate(data);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//       <div className="bg-background p-6 rounded-lg w-full max-w-md shadow-lg">
//         <h2 className="text-lg font-semibold mb-4">Add Task</h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label className="block text-sm mb-1">Title</label>
//             <input
//               {...register("title")}
//               className="w-full border rounded px-3 py-2"
//             />
//             {errors.title && (
//               <p className="text-red-500 text-sm">{errors.title.message}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Description</label>
//             <textarea
//               {...register("description")}
//               className="w-full border rounded px-3 py-2"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Status</label>
//             <select
//               {...register("status")}
//               className="w-full border rounded px-3 py-2"
//             >
//               <option value="PENDING">Pending</option>
//               <option value="WORKING">Working</option>
//               <option value="DONE">Done</option>
//             </select>
//           </div>

//           <div className="flex justify-end gap-2 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 rounded border"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={mutation.isPending}
//               className="px-4 py-2 rounded bg-primary text-white"
//             >
//               {mutation.isPending ? "Saving..." : "Create"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }