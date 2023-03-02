import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";

const PlansData = [
  {
    id: "01",
    name: "Arcade",
    image: Arcade,
    PricePerMo: "$9/mo",
    PricePerYr: "$90/mo",
  },
  {
    id: "02",
    name: "Advanced",
    image: Advanced,
    PricePerMo: "$12/mo",
    PricePerYr: "$120/yr",
  },
  {
    id: "03",
    name: "Pro",
    image: Pro,
    PricePerMo: "$15/mo",
    PricePerYr: "$150/yr",
  },
];

export default PlansData;
