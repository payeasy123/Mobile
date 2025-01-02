// import Icon from "@/component/icons";
// import { MAIN, REGISTER } from "@/constants/routeName";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

// assets
// import googleIcon from "@/assets/icons/Google.png";
import { Container, DismissKeyboard } from "@/src/shared/components";
import { Button } from "@/src/shared/components/ui/Button";
import { FormInput } from "@/src/shared/components/ui/Form";
import { COLORS } from "@/src/shared/utils/colors";
import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { Feather } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormDataProps {
  email: string;
  password: string;
}

const Login = ({ navigation }: any) => {
  const [showPassword, setShowPassword] = useState(true);

  const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*([a-zA-Z\d])\1{2}).{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long."
      ),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const rules = {};

  const onSubmit = (data: FormDataProps) => {
    console.log(data);
    navigation.navigate('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <DismissKeyboard>
        <Container
          style={{
            paddingTop: 40,
            height: "95%",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <View>
              <Text style={styles.welcome_text}>Login</Text>

              <View style={styles.input_container}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormInput
                      value={value}
                      onChange={onChange}
                      label="Email address/phone number"
                      placeholder="E.g Johndoe@gmail.com"
                      error={errors.email?.message}
                      autoCapitalize="none"
                      keyboardType={
                        Platform.OS === "ios" ? "ascii-capable" : "default"
                      }
                    />
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormInput
                      value={value}
                      label="Password"
                      onChange={onChange}
                      autoCapitalize="none"
                      placeholder="Minumum of 14 Characters"
                      secureTextEntry={showPassword}
                      error={errors.password?.message}
                      keyboardType={
                        Platform.OS === "ios" ? "ascii-capable" : "default"
                      }
                      icon={
                        <TouchableOpacity
                          style={styles.eye_icon}
                          onPress={() => setShowPassword(!showPassword)}
                        >
                          <Feather
                            name={showPassword ? "eye" : "eye-off"}
                            size={20}
                            color={COLORS.black}
                          />
                        </TouchableOpacity>
                      }
                    />
                  )}
                />
              </View>

              <TouchableOpacity style={styles.forgot_btn}>
                <Text style={styles.forgot_text}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('')}
                style={{
                  padding: 16,
                  borderRadius: 10,
                  borderWidth: 1.5,
                  borderColor: "#5660DB",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  marginBottom: 10,
                }}
              >
                {/* <Image
                  source={googleIcon}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    marginRight: 15,
                  }}
                /> */}

                <Text
                  style={{
                    ...createTextStyle({
                      color: "offBlack",
                      size: "_16",
                    }),
                    color: "#404040",
                  }}
                >
                  Continue with Google
                </Text>
              </TouchableOpacity>

              <Button
                title="Sign in"
                onPress={handleSubmit(onSubmit)}
                textStyle={{
                  textAlign: "center",
                  ...createTextStyle({
                    color: "white",
                    weight: "regular",
                    size: "_16",
                  }),
                }}
                style={{
                  backgroundColor: COLORS.primary,
                  padding: "4%",
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              />

              <View style={styles.register_container}>
                <Text style={styles.register_text}>Don't have an account?</Text>

                <TouchableOpacity onPress={() => navigation.navigate('')}>
                  <Text style={styles.forgot_text}> Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Container>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
  },

  welcome_text: {
    marginBottom: 24,
    ...createTextStyle({ color: "offBlack", weight: "bold", size: "_24" }),
  },

  input_container: {
    flexDirection: "column",
    rowGap: 17,
  },
  eye_icon: {
    position: "absolute",
    right: 20,
  },

  //   Forgot Button
  forgot_btn: {
    marginVertical: 15,
  },
  forgot_text: {
    ...createTextStyle({ color: "primary" }),
  },

  alternative: {
    paddingVertical: "7%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 5,
  },
  line: {
    height: 1,
    width: (width - width * 0.08) / 3,
    backgroundColor: COLORS.icon,
  },
  alternative_text: {
    ...createTextStyle({ color: "white", size: "_14" }),

    fontFamily: "lexend_light",
  },
  icons_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 30,
  },
  register_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  register_text: {
    // color: colors.offBlack,
    // fontFamily: fontFamily.regular,
    // fontSize: fontSize.fontSize12,
  },
});
