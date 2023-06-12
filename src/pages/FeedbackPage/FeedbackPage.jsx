import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const FeedbackPage = () => {
    const {id}=useParams();
    // console.log(id);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`https://assignment-12-server-site-sepia.vercel.app/classes/${id}`, {
            method: 'PUT',
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
                        title: `feedback send successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <div className="h-20">

            </div>
            <div className="">
                <h2 className="text-4xl font-bold mb-5 text-center mt-8">Feedback</h2>
                <div className="">
                    <div className="hero my-12 ">
                     
                        
                            <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Feedback</span>
                                        </label>
                                  
                                        <textarea  {...register("adminFeedback", { required: true })} className="textarea textarea-secondary w-full" placeholder="Bio"></textarea>                                    </div>
                                   
                                    <div className="form-control mt-6">
                                        <button className="btn btn-secondary">Feedback</button>
                                    </div>
                                </form>
                            </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;