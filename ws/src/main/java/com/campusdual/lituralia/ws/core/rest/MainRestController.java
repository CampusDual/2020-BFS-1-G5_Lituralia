package com.campusdual.lituralia.ws.core.rest;

//import org.springframework.http.HttpStatus;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//import org.springframework.http.ResponseEntity;

@RestController
//@RequestMapping("/api/main")
public class MainRestController {
	@RequestMapping(value = "/api/main", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String main() {
		return "index";
	}
	
	/*public ResponseEntity<String> testRest() {
		return new ResponseEntity<>("It Works!", HttpStatus.OK);
	}*/
}
