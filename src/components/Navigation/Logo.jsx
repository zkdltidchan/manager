import React from "react"
import { Box, Text } from "@chakra-ui/react"

const Logo = ({ logo, ...props }) => {
    return (
        <Box {...props}>
            <Text fontSize="lg" fontWeight="bold">
                {logo}
            </Text>
        </Box>
    )
}

export default Logo