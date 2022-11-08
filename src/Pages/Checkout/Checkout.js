import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contex/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unRwgisarwd";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      email: email,
      phone: phone,
      message: message,
    };

    // if (phone.length > 10) {
    //   alert("Phone number should be 10 Carecter or longer");
    // }else{}

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Plased Successfuly");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl text-center m-4">You are Order to: {title}</h2>
        <h4 className="text-4xl text-center m-4 text-orange-600">{price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full input-bordered"
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-ghost w-full input-bordered"
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-ghost w-full input-bordered"
            required
          />
          <input
            defaultValue={user?.email}
            readOnly
            name="email"
            type="email"
            placeholder="Your Email"
            className="input input-ghost w-full input-bordered"
            required
          />
        </div>
        <textarea
          className="textarea textarea-bordered h-36 w-full"
          placeholder="Your Message"
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <input
          className="btn btn-error w-full border-2"
          type="submit"
          value="Order Conform"
        />
      </form>
    </div>
  );
};

export default Checkout;
