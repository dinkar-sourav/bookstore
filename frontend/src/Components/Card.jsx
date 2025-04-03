export default function Card({item,key}) {
   
  return (
    <div className="flex justify-around">
    <div className="mt-4 card bg-base-100 shadow-xl w-96 hover:scale-105 duration-300 ">
      <figure>
        <img
          src={item.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
          <div className="badge badge-secondary">{item.price==0 ? "Free" : "Paid"}</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-between">
          <div className="borde border-black p-3 rounded-lg hover:bg-pink-500 hover:text-white duration-200 badge badge-outline px-4 py-4 cursor-pointer">${item.price}</div>
          <div className="border border-black p-3 rounded- badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer py-5">Buy Now</div>
        </div>
      </div>
    </div>

    </div>
  );
}
