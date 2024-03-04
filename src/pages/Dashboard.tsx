import ChartComponent from "../componets/ChartComponent";
import { GoArrowDownLeft } from "react-icons/go";

const Dashboard = () => {
  return (
    <div className="p-6 w-[80vw]">
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-10 py-12 bg-purple-600 rounded-3xl backgroundWithImage">
          <p className="text-base font-medium text-white">Total Clients</p>
          <p className="text-4xl font-semibold text-white">3,248</p>
        </div>
        <div className="p-10 py-12 bg-purple-600 rounded-3xl backgroundWithImage2">
          <p className="text-base font-medium text-white">Total Orders</p>
          <p className="text-4xl font-semibold text-white">3,248</p>
        </div>
        <div className="p-10 py-12 bg-purple-600 rounded-3xl backgroundWithImage3">
          <p className="text-base font-medium text-white">Total Revenue</p>
          <p className="text-4xl font-semibold text-white">3,248</p>
        </div>
      </div>
      <div className="flex justify-between items-start gap-8 w-full mt-5">
        <div className="w-full">
          {" "}
          <ChartComponent />
        </div>
        <div className="mt-9 w-[350px] border border-1 border-gray-400 rounded-lg">
          <h1 className="font-bold text-lg px-5 pt-3">Business MMR</h1>
          <div className="mt-4 flex items-end gap-2 px-5 py-3">
            <div className="w-[80px] h-[80px] rounded-full bg-blue-400"></div>
            <div className="w-[50px] h-[50px] rounded-full bg-purple-400"></div>
            <div className="w-[30px] h-[30px] rounded-full bg-stone-400"></div>
          </div>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="mt-1 border px-5 py-2 flex items-center gap-5"
            >
              <p className="w-[12px] h-[12px] rounded-full bg-blue-400"></p>
              <p className="font-bold">$23,343</p>
              <p>Jan 2024</p>
              <div className="flex items-center font-bold text-md">
                <GoArrowDownLeft className="" />
                <p>6%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
