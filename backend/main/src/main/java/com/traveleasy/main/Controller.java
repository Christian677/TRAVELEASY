package com.traveleasy.main;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @RequestMapping("/ciao")
    public String ciao() {
        return "Hello world";
    }
    
}
