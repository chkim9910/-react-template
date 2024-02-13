import { UnorderedList, ListItem } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Gnb = () => {
  return (
    <UnorderedList
      display={{ sm: "none", lg: "flex" }}
      gap={"40px"}
      fontSize={"16px"}
      color={"white"}
    >
      <ListItem>
        <Link as={ReactRouterLink} to="/">
          Main Dashboard
        </Link>
      </ListItem>
      <ListItem>
        <Link as={ReactRouterLink} to="/marketplace">
          NFT Marketplace
        </Link>
      </ListItem>
      <ListItem>
        <Link as={ReactRouterLink} to="/datatables">
          Data Tables
        </Link>
      </ListItem>
      <ListItem>
        <Link as={ReactRouterLink} to="/profile">
          Profile
        </Link>
      </ListItem>
      <ListItem>
        <Link as={ReactRouterLink} to="/signin">
          Sign In
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default Gnb;
