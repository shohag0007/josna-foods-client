import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredImg from '../../../assets/home/featured.jpg';

import './Featured.css';
const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle
                subHeading="check it out"
                heading="Featured Item"
            ></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where Can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita delectus beatae incidunt esse similique, accusamus a recusandae, tempora consequuntur modi voluptatum molestiae, suscipit totam? Iusto corporis voluptatum debitis a, recusandae sequi harum deleniti odio temporibus ad consequatur provident, aliquam natus quis cupiditate quidem tempore dolorem distinctio earum laudantium repellat?</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;