import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Image,
  Text,
  Select,
  useToast 
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Navbar from "../Component/Navbar";
import Footer from "./Footer";
import Logo from "../Component/Logo/New_Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { CreateUser } from "../Redux/AuthReducer/action";
const initialState = {
  firstname: "",
  lastname: "",
  age: "",
  gender: "",
  maritalstatus: "",
  email: "",
  password: "",
};
export default function Signup() {
  const toast = useToast()
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const isAuth = useSelector((store)=>store.authReducer.isAuth);
  console.log(isAuth);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch(CreateUser(formState)).then(()=>{
      toast({
        title: "Account Created 👍.",
        description: "We created Account for you!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }).catch(()=>{
      toast({
        title: "Account Not Created.",
        description: "Failed to Create Account!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    })
    setFormState(initialState);
  };
  if(isAuth){
    return <Navigate to={'/login'} />
  }
  return (
    <>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bgColor={"#edeeee"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Image src={Logo} alt="Logo" />
          </Stack>
          <Box rounded={"lg"} bgColor={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={2}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel color={"blackAlpha.900"}>First Name</FormLabel>
                    <Input
                      type="text"
                      bgColor={"white"}
                      color={"gray.800"}
                      border={"1px solid gray"}
                      _placeholder={{
                        color: "gray.800",
                      }}
                      placeholder="First Name"
                      value={formState.firstname}
                      name={"firstname"}
                      onChange={handleChange}
                      focusBorderColor='#ff6f61'
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel color={"blackAlpha.900"}>Last Name</FormLabel>
                    <Input
                      type="text"
                      bgColor={"white"}
                      color={"gray.800"}
                      border={"1px solid gray"}
                      _placeholder={{
                        color: "gray.800",
                      }}
                      placeholder="Last Name"
                      value={formState.lastname}
                      name={"lastname"}
                      onChange={handleChange}
                      focusBorderColor='#ff6f61'
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel color={"blackAlpha.900"}>Email address</FormLabel>
                <Input
                  type="email"
                  bgColor={"white"}
                  color={"gray.800"}
                  border={"1px solid gray"}
                  _placeholder={{
                    color: "gray.800",
                  }}
                  placeholder="Email Address"
                  value={formState.email}
                  name={"email"}
                  onChange={handleChange}
                  focusBorderColor='#ff6f61'
                />
              </FormControl>
              <FormControl id="age" isRequired>
                <FormLabel color={"blackAlpha.900"}>Age</FormLabel>
                <Input
                  type="number"
                  bgColor={"white"}
                  color={"gray.800"}
                  border={"1px solid gray"}
                  _placeholder={{
                    color: "gray.800",
                  }}
                  placeholder="Age"
                  value={formState.age}
                  name={"age"}
                  onChange={handleChange}
                  focusBorderColor='#ff6f61'
                />
              </FormControl>
              <FormControl id="gender" isRequired>
                <FormLabel color={"blackAlpha.900"}>Gender</FormLabel>
                <Select
                  placeholder="Select option"
                  color={"gray.800"}
                  style={{ backgroundColor: "white", border: "1px solid gray" }}
                  value={formState.gender}
                  name={"gender"}
                  onChange={handleChange}
                  focusBorderColor='#ff6f61'
                >
                  <option style={{ backgroundColor: "white" }} value="male">
                    Male
                  </option>
                  <option style={{ backgroundColor: "white" }} value="female">
                    Female
                  </option>
                </Select>
              </FormControl>
              <FormControl id="maritalstatus" isRequired>
                <FormLabel color={"blackAlpha.900"}>Marital Status</FormLabel>
                <Select
                  placeholder="Select option"
                  color={"gray.800"}
                  style={{ backgroundColor: "white", border: "1px solid gray" }}
                  value={formState.maritalstatus}
                  name={"maritalstatus"}
                  onChange={handleChange}
                  focusBorderColor='#ff6f61'
                >
                  <option style={{ backgroundColor: "white" }} value="single">
                    Single
                  </option>
                  <option style={{ backgroundColor: "white" }} value="married">
                    Married
                  </option>
                </Select>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color={"blackAlpha.900"}>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    bgColor={"white"}
                    color={"gray.800"}
                    border={"1px solid gray"}
                    _placeholder={{
                      color: "gray.800",
                    }}
                    placeholder="Password"
                    value={formState.password}
                    name={"password"}
                    onChange={handleChange}
                    focusBorderColor='#ff6f61'
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      px={4}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"#ff6f61"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleUser}
                  px={4}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"#ff6f61"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Sign Up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"} color={"black"}>
                  Already a user?{" "}
                  <Link style={{color:'blue'}} to={"/login"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}

