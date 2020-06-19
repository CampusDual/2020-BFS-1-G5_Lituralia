package com.campusdual.lituralia.boot.core;


import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class ServerApplicationTest {

    @Test
    @DisplayName("Spring Boot Initialization")
    void contextLoads() {
    }
}