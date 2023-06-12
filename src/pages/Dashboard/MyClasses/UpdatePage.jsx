import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`https://assignment-12-server-site-sepia.vercel.app/classes/${id}`, {
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                
            
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `update successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/myClasses')
                }
            })
    }
    return (
        <div>
            <div className="h-20">

            </div>
            <div className="">
                <h2 className="text-4xl font-bold mb-5 text-center mt-8">Update</h2>
                <div className="">
                    <div className="hero my-12 ">


                        <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Class Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} type="text" placeholder="Class Name" className="input input-bordered w-full" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Class Image</span>
                                    </label>
                                    <input {...register("photo", { required: true })} type="url" placeholder="Class Image" className="input input-bordered w-full" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input {...register("price", { required: true })} type="number" placeholder="price" className="input input-bordered w-full" />

                                </div>
                                <div className="form-control hidden">
                                    <label className="label">
                                        <span className="label-text">approve</span>
                                    </label>
                                    <input defaultValue={'1'} {...register("approve", { required: true })} type="number" placeholder="price" className="input input-bordered w-full" />

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-secondary">update</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdatePage;