import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
import useUserProfileStore from "../../store/userProfileStore";

const ProfileTabs = () => {
    const setCurrentTab = useUserProfileStore((state) => state.setCurrentTab);
    const { currentTab } = useUserProfileStore((state) => ({
        currentTab: state.currentTab,
    }));
    return (
        <Flex
            w={"full"}
            justifyContent={"center"}
            gap={{ base: 4, sm: 10 }}
            textTransform={"uppercase"}
            fontWeight={"bold"}
        >
            <Flex
                borderTop={
                    currentTab === "myposts" ? "1px solid white" : "none"
                }
                alignItems={"center"}
                p="3"
                gap={1}
                cursor={"pointer"}
                onClick={() => setCurrentTab("myposts")}
            >
                <Box fontSize={20}>
                    <BsGrid3X3 />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>
                    Posts
                </Text>
            </Flex>

            <Flex
                borderTop={currentTab === "saved" ? "1px solid white" : "none"}
                alignItems={"center"}
                p="3"
                gap={1}
                cursor={"pointer"}
                onClick={() => setCurrentTab("saved")}
            >
                <Box fontSize={20}>
                    <BsBookmark />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>
                    Saved
                </Text>
            </Flex>

            <Flex
                borderTop={currentTab === "likes" ? "1px solid white" : "none"}
                alignItems={"center"}
                p="3"
                gap={1}
                cursor={"pointer"}
                onClick={() => setCurrentTab("likes")}
            >
                <Box fontSize={20}>
                    <BsSuitHeart fontWeight={"bold"} />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>
                    Likes
                </Text>
            </Flex>
        </Flex>
    );
};

export default ProfileTabs;
