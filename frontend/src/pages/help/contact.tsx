function Contact() {
  return (
    <div className="space-y-8 my-8">
      <div className="text-2xl font-medium">Get In Touch With Us</div>

      <div>
        <label className="text-text text-sm block mb-2">Full Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          className="w-full px-4 py-2 rounded-lg border border-[#252525] bg-transparent text-white focus:outline-none focus:ring focus:ring-primary"
        />
      </div>

      <div>
        <label className="text-text text-sm block mb-1">Email Address</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full px-4 py-2 rounded-lg border border-[#252525] bg-transparent text-white focus:outline-none focus:ring focus:ring-primary"
        />
      </div>

      <div>
        <label className="text-text text-sm block mb-1">Issue Category</label>
        <select className="bg-[#191817] border border-[#252525] rounded-lg p-2  focus:outline-none">
          <option>Bill & Payment</option>
          <option>Metric 2</option>
          <option>Metric 3</option>
        </select>
      </div>

      <div>
        <label className="text-text text-sm block mb-1 ">Message</label>
        <textarea
          placeholder=""
          className="w-full px-4 py-2 rounded-lg border h-52 border-[#252525] bg-transparent text-white focus:outline-none focus:ring focus:ring-primary"
        />
      </div>

      <div className={` flex md:justify-end`}>
        <button className="bg-primary w-full md:w-auto text-white font-medium px-8 py-2 rounded-full">
          Submit Form
        </button>
      </div>
    </div>
  );
}

export default Contact;
