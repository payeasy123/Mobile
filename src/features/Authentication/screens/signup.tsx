import { IMAGES } from "@/assets/images";
import { Container } from "@/src/shared/components/ui";
import { Button } from "@/src/shared/components/ui/Button";
import CustomInput from "@/src/shared/components/ui/Input";
import { useSession } from "@/src/shared/context";
import { COLORS } from "@/src/shared/utils/colors";
import { createTextStyle } from "@/src/shared/utils/createTextStyle";
import { SCREEN_WIDTH } from "@/src/shared/utils/screenDimensions";
import { Feather } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";

interface FormDataProps {
  userName: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
}

const Register = ({ navigation }: any) => {
  const { signIn, isLoading } = useSession();
  const [showPassword, setShowPassword] = useState(true);

  const schema = yup.object().shape({
    userName: yup.string().required("User Name is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*([a-zA-Z\d])\1{2}).{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.",
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      userName: "",
      email: "",
      phone: undefined,
      password: "",
    },
  });

  const onSubmit = (data: FormDataProps) => {
    console.log(data);
    signIn();
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            padding: 20,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <Container
            style={{
              paddingTop: 40,
              height: "95%",
              paddingBottom: 20,
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
                <Text style={styles.welcome_text}>Create Account</Text>

                <View style={styles.input_container}>
                  <Controller
                    name="userName"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput
                        required
                        value={value}
                        onChangeText={onChange}
                        label="Username"
                        placeholder="John Doe"
                        errorMessage={errors.userName?.message}
                        keyboardType={Platform.OS === "ios" ? "ascii-capable" : "default"}
                      />
                    )}
                  />

                  <Controller
                    name="userName"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput
                        required
                        value={value}
                        onChangeText={onChange}
                        label="Username"
                        placeholder="John Doe"
                        errorMessage={errors.userName?.message}
                        keyboardType={Platform.OS === "ios" ? "ascii-capable" : "default"}
                      />
                    )}
                  />

                  <Controller
                    name="phone"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput
                        value={value}
                        onChangeText={onChange}
                        label="Phone Number"
                        placeholder="+234 xxx xxx xxxx"
                        errorMessage={errors.phone?.message}
                        autoCapitalize="none"
                        keyboardType="phone-pad"
                      />
                    )}
                  />

                  <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput
                        required
                        value={value}
                        onChangeText={onChange}
                        label="Email address/phone number"
                        placeholder="E.g Johndoe@gmail.com"
                        errorMessage={errors.email?.message}
                        keyboardType={Platform.OS === "ios" ? "ascii-capable" : "default"}
                      />
                    )}
                  />

                  <Controller
                    name="password"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput
                        required
                        value={value}
                        onChangeText={onChange}
                        label="Password"
                        placeholder="Minumum of 14 Characters"
                        autoCapitalize="none"
                        secureTextEntry={showPassword}
                        errorMessage={errors.password?.message}
                        keyboardType={Platform.OS === "ios" ? "ascii-capable" : "default"}
                        iconRight={
                          <TouchableOpacity style={styles.eye_icon} onPress={() => setShowPassword(!showPassword)}>
                            <Feather
                              name={showPassword ? "eye" : "eye-off"}
                              size={20}
                              color={errors.password?.message ? COLORS.red60 : COLORS.grey60}
                            />
                          </TouchableOpacity>
                        }
                      />
                    )}
                  />

                  <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <CustomInput
                        required
                        value={value}
                        onChangeText={onChange}
                        label="Confirm Password"
                        placeholder="Password must Match"
                        autoCapitalize="none"
                        secureTextEntry={showPassword}
                        errorMessage={errors.confirmPassword?.message}
                        keyboardType={Platform.OS === "ios" ? "ascii-capable" : "default"}
                        iconRight={
                          <TouchableOpacity style={styles.eye_icon} onPress={() => setShowPassword(!showPassword)}>
                            <Feather
                              name={showPassword ? "eye" : "eye-off"}
                              size={20}
                              color={errors.confirmPassword?.message ? COLORS.red60 : COLORS.grey60}
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
                  onPress={() => navigation.navigate("")}
                  style={{
                    padding: 14,
                    borderRadius: 10,
                    borderWidth: 1.5,
                    borderColor: "#AB49FF",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                  }}
                >
                  <Image
                    source={IMAGES.GoogleIcon}
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: "contain",
                      marginRight: 15,
                    }}
                  />

                  <Text
                    style={{
                      ...createTextStyle({
                        color: "offBlack",
                        size: "_14",
                      }),
                      color: "#404040",
                    }}
                  >
                    Continue with Google
                  </Text>
                </TouchableOpacity>

                <Button
                  title="Sign Up"
                  variant="gradient"
                  onPress={handleSubmit(onSubmit)}
                  textStyle={{
                    textAlign: "center",
                    ...createTextStyle({
                      color: "white",
                      weight: "regular",
                      size: "_14",
                    }),
                  }}
                  style={{
                    borderRadius: 10,
                    paddingVertical: 16,
                  }}
                />

                <View style={styles.register_container}>
                  <Text style={styles.register_text}>Have an account?</Text>

                  <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
                    <Text style={styles.forgot_text}> Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    overflow: "scroll",
    backgroundColor: COLORS.grey10,
  },

  welcome_text: {
    marginBottom: 24,
    ...createTextStyle({ color: "offBlack", weight: "bold", size: "_24" }),
  },

  input_container: {
    flexDirection: "column",
    rowGap: 17,
    width: "100%",
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
    ...createTextStyle({ color: "darkPurple" }),
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
    width: (SCREEN_WIDTH - SCREEN_WIDTH * 0.08) / 3,
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
