import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const Productpage: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const navigate = useNavigate();
  const apiCall = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let recElement = await response.json();
    setData(recElement);
    console.log("recElement-----", recElement);
  };

  useEffect(() => {
    apiCall();
  }, []);
  const cardDetails = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Box sx={Styles.cardViewStyle}>
        {data?.map((item: Product, index: number) => (
          <Box
            key={item.id}
            sx={{
              minHeight: "380px",
              margin: "10px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Card
              sx={{ width: 300 }}
              onClick={() => cardDetails(item.id)}
              data-testid={`cardElementId-${index}`}
            >
              <img style={Styles.imgStyle} src={item.image} alt={item.title} />
              <CardContent>
                <Typography sx={Styles.titleStyle}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${item.price}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
};

const Styles = {
  cardViewStyle: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: {
      lg: "flex-start",
      md: "flex-start",
      sm: "center",
      xs: "center",
    },
    gap: "5px",
  },
  titleStyle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  imgStyle: {
    width: "250px",
    height: "250px",
  },
};

export default Productpage;
