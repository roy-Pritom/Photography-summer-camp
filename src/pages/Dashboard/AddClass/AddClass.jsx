import { useContext } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../../Provider/AuthProvider";

const AddClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  const {user}=useContext(authContext);
    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-8">Add a class</h2>
 <div className="hero">
  <div className="hero-content ">
  
    <div className="card shadow-2xl bg-base-100">
        
      <form onSubmit={handleSubmit(onSubmit)} className="card-body grid  grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input  type="text" placeholder="Class name" {...register("className", { required: true })} className="input input-bordered w-full" />
          {errors.className?.type === 'required' && <p className="text-red-400">class name is required</p>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input  type="url" placeholder="Class Image" {...register("classImg", { required: true })} className="input input-bordered w-full" />
          {errors.classImg?.type === 'required' && <p className="text-red-400">class image is required</p>}

        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input  type="text" placeholder="Instructor name" {...register("instructorName", { required: true })} defaultValue={user?.displayName}
          readOnly className="input input-bordered w-full" />
          {errors.instructorName?.type === 'required' && <p className="text-red-400">instructor name is required</p>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input  type="email" placeholder="email" {...register("instructorEmail", { required: true })} defaultValue={user?.email} readOnly className="input input-bordered w-full" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input  type="number" placeholder="Available Seats" {...register("seats", { required: true })}  className="input input-bordered w-full" />
          {errors.seats?.type === 'required' && <p className="text-red-400">seats is required</p>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input  type="number" placeholder="Price" {...register("price", { required: true })}  className="input input-bordered w-full" />
          {errors.price?.type === 'required' && <p className="text-red-400">price is required</p>}

        </div>
   
        <div className="form-control mt-6  w-[300px]">
            <input type="submit" className="btn btn-secondary w-[200px] mx-12 md:mx-52" value="Add" />
        </div>
      </form>

    </div>
  </div>
</div>
        </div>
    );
};

export default AddClass;