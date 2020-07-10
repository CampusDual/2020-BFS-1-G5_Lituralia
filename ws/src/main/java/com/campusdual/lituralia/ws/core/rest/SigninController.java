package com.campusdual.lituralia.ws.core.rest;

import com.campusdual.lituralia.api.core.service.ISigninService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/signin")
@ComponentScan(basePackageClasses = {com.campusdual.lituralia.api.core.service.ISigninService.class})
public class SigninController extends ORestController<ISigninService> {

    @Autowired
    private ISigninService userSrv;

    @Override
    public ISigninService getService() {
        return this.userSrv;
    }


}
