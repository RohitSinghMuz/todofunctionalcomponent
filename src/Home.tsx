import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import FeedSharpIcon from "@mui/icons-material/FeedSharp";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import CircleNotificationsSharpIcon from "@mui/icons-material/CircleNotificationsSharp";
import OutboxSharpIcon from "@mui/icons-material/OutboxSharp";
import NfcIcon from "@mui/icons-material/Nfc";
import Productpage from "./Productpage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

interface selectByDate {
  id: number;
  name: string;
}

const dateElement: selectByDate[] = [
  { id: 1, name: "Date" },
  { id: 2, name: "Days" },
  { id: 3, name: "month" },
];

const Home: React.FC = () => {
  const [isRecent, setIsRecent] = useState<boolean>(false);
  const [isPopular, setisPopular] = useState<boolean>(false);
  const [isNavigate, setisNavigate] = useState<boolean>(true);
  const [noColor, setnoColor] = useState<boolean>(true);
  const [selectedelemnt, setSelectElement] = useState<number | undefined>(
    undefined
  );

  const handleFruitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectElement(Number(event.target.value));
  };
  const handlePopular = () => {
    setisPopular(true);
    setIsRecent(false);
  };

  const handleRecent = () => {
    setisPopular(false);
    setIsRecent(true);
  };
  const expandNav = () => {
    setisNavigate((current) => !current);
  };
  const handleNoColor = () => {
    setnoColor((current) => !current);
  };
  return (
    <>
      <Box sx={Styles.pageViewStyle}>
        <Box sx={Styles.pageElementStyle}>
          <Box sx={Styles.headerViewStyle}>
            <Box sx={Styles.avatarViewStyle}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                //   onClick={handleOpenNavMenu}
                color="inherit"
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              <Typography sx={Styles.startTextStyule}>Start Screen</Typography>
            </Box>
            <Box sx={Styles.listViewStyle}>
              <Button sx={Styles.avatarViewStyle}>
                <ExpandCircleDownOutlinedIcon sx={Styles.iconsStyle} />
                <Typography style={Styles.listTextStyle}>Recent</Typography>
              </Button>
              <Button sx={Styles.avatarViewStyle}>
                <ArticleIcon sx={Styles.iconsStyle} />
                <Typography style={Styles.listTextStyle}>Projects</Typography>
              </Button>
              <Button sx={Styles.avatarViewStyle}>
                <SearchSharpIcon sx={Styles.iconsStyle} />
                <Typography style={Styles.listTextStyle}>Search</Typography>
              </Button>
              <Button sx={Styles.avatarViewStyle}>
                <FeedSharpIcon sx={Styles.iconsStyle} />
                <Typography style={Styles.listTextStyle}>Drafts</Typography>
              </Button>
              <Button sx={Styles.avatarViewStyle}>
                <TuneSharpIcon sx={Styles.iconsStyle} />
                <Typography style={Styles.listTextStyle}>Settings</Typography>
              </Button>
            </Box>

            <Box sx={Styles.avatarViewStyle}>
              <Button>
                <OutboxSharpIcon sx={Styles.sentIconsStyle} />
              </Button>

              <Button>
                <Typography sx={Styles.noOfNitifStyle}>3</Typography>
                <CircleNotificationsSharpIcon sx={Styles.iconsNotifStyle} />
              </Button>

              <Button title="Create" sx={Styles.createViewStyle}>
                <AddOutlinedIcon />
                <Typography>Create</Typography>
              </Button>
            </Box>
          </Box>
          <Box sx={Styles.elementStyles}>
            <Box>
              <Box sx={Styles.navigationViewStyle}>
                <Typography sx={Styles.navigationTextStyle}>
                  NAVIGATION
                </Typography>
                <Button onClick={expandNav} data-testid="expandNavId">
                  {isNavigate === true ? (
                    <ExpandMoreIcon
                      fontSize="medium"
                      sx={Styles.expandIconStyle}
                    />
                  ) : (
                    <KeyboardArrowUpOutlinedIcon
                      fontSize="medium"
                      sx={Styles.expandIconStyle}
                    />
                  )}
                </Button>
              </Box>
              <Box sx={{ display: isNavigate == true ? "block" : "none" }}>
                <Button sx={Styles.leftSideBarViewStyle}>
                  <NfcIcon sx={Styles.iconsFarmingStyle} />
                  <Typography sx={Styles.listLeftSideTextStyle}>
                    Wirefarming
                  </Typography>
                </Button>
                <Button sx={Styles.leftSideBarViewStyle}>
                  <NfcIcon sx={Styles.iconscolorSchemeStyle} />
                  <Typography sx={Styles.colorSchemeTextStyle}>
                    Color Scheme
                  </Typography>
                </Button>
                <Button sx={Styles.leftSideBarViewStyle}>
                  <NfcIcon sx={Styles.iconsCreativityStyle} />
                  <Typography sx={Styles.creativityTextStyle}>
                    Creativity
                  </Typography>
                </Button>
                <Button sx={Styles.leftSideBarViewStyle}>
                  <NfcIcon sx={Styles.iconsInspiratationsStyle} />
                  <Typography sx={Styles.inspirationTextStyle}>
                    Inspiratation
                  </Typography>
                </Button>
                <Typography sx={Styles.horizentalLineStyle} />
              </Box>
              <Box sx={Styles.navigationViewStyle}>
                <Typography sx={Styles.noColorTextStylez}>NO COLOR</Typography>

                <Button onClick={handleNoColor} data-testid="handleNoColorId">
                  {noColor === true ? (
                    <ExpandMoreIcon
                      fontSize="medium"
                      sx={Styles.expandIconStyle}
                    />
                  ) : (
                    <KeyboardArrowUpOutlinedIcon
                      fontSize="medium"
                      sx={Styles.expandIconStyle}
                    />
                  )}
                </Button>
              </Box>
              <Box sx={{ display: noColor === true ? "block" : "none" }}>
                <Button sx={Styles.leftSideBarViewStyle}>
                  <NfcIcon sx={Styles.iconsFarmingStyle} />
                  <Typography sx={Styles.airplaneTextStyle}>
                    Airplane
                  </Typography>
                </Button>
                <Button sx={Styles.leftSideBarViewStyle}>
                  <NfcIcon sx={Styles.iconscolorSchemeStyle} />
                  <Typography sx={Styles.airplaneTextStyle}>
                    Briefcase
                  </Typography>
                </Button>
                <Button sx={Styles.leftSideBarViewStyle}>
                  <NfcIcon sx={Styles.iconsCreativityStyle} />
                  <Typography sx={Styles.airplaneTextStyle}>
                    Organisation
                  </Typography>
                </Button>
                <Button sx={Styles.leftSideBarViewStyle}>
                  <NfcIcon sx={Styles.iconsInspiratationsStyle} />
                  <Typography sx={Styles.airplaneTextStyle}>
                    Shopping
                  </Typography>
                </Button>
              </Box>
              <Button sx={Styles.termsViewStyle}>
                <Typography sx={Styles.termsTextStyle}>
                  Terms of Services
                </Typography>
              </Button>

              <Button sx={Styles.termsViewStyle}>
                <Typography sx={Styles.termsTextStyle}>
                  Privacy Policy
                </Typography>
              </Button>
            </Box>
            <Box sx={Styles.ProductpageStyle}>
              <Productpage />
              <Box sx={Styles.handleprojectViewStyle}>
                <Box sx={Styles.lastProjectViewStyle}>
                  <LocalHospitalOutlinedIcon sx={Styles.plusIconsStyles} />
                  <Typography sx={Styles.lastProjectTextStyle}>
                    My Last projects
                  </Typography>
                </Box>
                <Box sx={Styles.recentViewStyle}>
                  <Box sx={Styles.showByDateViewStyle}>
                    <Typography sx={Styles.showByDateStyle}>
                      {selectedelemnt ? null : "Show by"}
                      <select
                        onChange={handleFruitChange}
                        style={{ border: "none" }}
                        data-testid="handleSelectItemId"
                      >
                        {/* {dateElement.map((item) => (
                          <option key={item.id} value={item.id}>
                            <Typography sx={Styles.showByDateStyle}>
                              {item.name}
                            </Typography>
                          </option>
                        ))} */}
                      </select>
                    </Typography>
                  </Box>
                  <Box sx={Styles.buttonViewStyle}>
                    <Button
                      data-testid="handleRecentelementId"
                      onClick={handleRecent}
                      sx={[
                        Styles.recentButtonStyle,
                        {
                          backgroundColor:
                            isRecent == true ? "#FFFFFF" : "#EFEFEF",
                        },
                      ]}
                    >
                      recent
                    </Button>
                    <Button
                      data-testid="handlePopularBtnId"
                      onClick={handlePopular}
                      sx={[
                        Styles.recentButtonStyle,
                        {
                          backgroundColor:
                            isPopular == true ? "#FFFFFF" : "#EFEFEF",
                        },
                      ]}
                    >
                      Popular
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const Styles = {
  recentButtonStyle: {
    height: "20px",
    padding: "15px",
    margin: "5px",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#EFEFEF",
    },
  },
  pageViewStyle: {
    // padding: "20px",
    // borderRadius: "10px",
  },
  avatarViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: "0px 10px 0px 10px",
  },
  leftSideBarViewStyle: {
    margin: "20px 15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  plusIconsStyles: {
    fontSize: "30px",
    color: "#1772EC",
  },
  showByDateStyle: {
    color: "#858585",
    fontWeight: "500",
  },
  showByDateViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0px 10px 0px",
  },
  elementStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  handleprojectViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "20px",
  },
  navigationTextStyle: {
    fontSize: "14px",
    color: "#8F8F8F",
    fontWeight: "600",
    margin: "15px 0px",
  },
  expandIconStyle: {
    color: "#8F8F8F",
  },
  pageElementStyle: {
    margin: "20px",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
  },
  iconsFarmingStyle: {
    backgroundColor: "#E2EDFC",
    color: "#0E56B3",
    padding: "6px",
    margin: "0px 10px",
    borderRadius: "20px",
  },
  iconsCreativityStyle: {
    backgroundColor: "#FEF3E6",
    color: "#C07614",
    padding: "6px",
    margin: "0px 10px",
    borderRadius: "20px",
  },
  iconscolorSchemeStyle: {
    backgroundColor: "#E2F8E3",
    color: "#2A9230",
    padding: "6px",
    margin: "0px 10px",
    borderRadius: "20px",
  },
  iconsInspiratationsStyle: {
    backgroundColor: "#F5DCFC",
    color: "#0E56B3",
    padding: "6px",
    margin: "0px 10px",
    borderRadius: "20px",
  },
  createViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100px",
    height: "35px",
    color: "#185BB5",
    margin: "20px 10px 0px 10px",
    border: "1px solid #D7D7D7",
    borderRadius: "5px",
    padding: "5px",
  },
  listTextStyle: {
    color: "#464646",
    fontWeight: "700",
  },
  listLeftSideTextStyle: {
    color: "#0E56B3",
    fontWeight: "700",
    fontSize: "16px",
    margin: "5px",
  },
  colorSchemeTextStyle: {
    color: "#5B8C5B",
    fontWeight: "700",
    fontSize: "16px",
    margin: "3px",
  },

  inspirationTextStyle: {
    color: "#5D1F6E",
    fontWeight: "700",
    fontSize: "16px",
    margin: "5px",
  },
  noColorTextStylez: {
    color: "#A2A3A2",
    fontWeight: "700",
    fontSize: "16px",
    margin: "5px",
  },
  airplaneTextStyle: {
    color: "#616161",
    fontWeight: "600",
    fontSize: "16px",
    margin: "5px",
    textTransform: "none",
  },
  creativityTextStyle: {
    color: "#895C24",
    fontWeight: "700",
    fontSize: "16px",
    margin: "5px",
  },
  startTextStyule: {
    marginTop: "15px",
    fontSize: "16px",
    fontWeight: "700",
    color: "#000000",
  },
  ProductpageStyle: {
    width: "80%",
  },
  listViewStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px",
    margin: "0px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    border: "1px solid #D7D7D7",
  },
  iconsStyle: {
    margin: "0px 8px",
  },
  recentViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: "0px 10px 0px 10px",
  },
  iconsNotifStyle: {
    positions: "absolute",
    zIndex: 111,
    marginTop: "10px",
    backgroundColor: "#C5F2C6",
    borderRadius: "20px",
    width: "25px",
    height: "25px",
    padding: "5px",
    color: "#208B25",
  },
  noOfNitifStyle: {
    positions: "absolute",
    zIndex: 99999,
    fontSize: "10px",
    marginTop: "-10px",
    marginRight: "-40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "15px",
    height: "15px",
    backgroundColor: "red",
    borderRadius: "10px",
    color: "#FFFFFF",
  },
  sentIconsStyle: {
    color: "#9A9A9A",
    margin: "20px 10px 10px 10px",
  },
  navigationViewStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  horizentalLineStyle: {
    borderBottom: "1px solid #e3e3e3",
  },
  termsTextStyle: {
    fontSize: "16px",
    color: "#5096F1",
    textTransform: "none",
  },
  termsViewStyle: {
    margin: "5px 15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  lastProjectViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  buttonViewStyle: {
    backgroundColor: "#EFEFEF",
    borderRadius: "10px",
    margin: " 0px 10px",
  },
  lastProjectTextStyle: {
    fontSize: "22px",
    color: "#000000",
    fontWeight: "900",
    textTransform: "none",
    margin: "0px 10px",
  },
};
export default Home;
