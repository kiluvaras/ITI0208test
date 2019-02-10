package com.example.demo;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @GetMapping("hello")
    public String hello() {
//        return "Hello stranger!";
        return "index";
    }

//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    public String index(Model model) {
        // this attribute will be available in the view jama.html as a thymeleaf variable
//        model.addAttribute("eventName", "FIFA 2018");
        // this just means render jama.html from static/ area
//        return "index";
//    }
}
