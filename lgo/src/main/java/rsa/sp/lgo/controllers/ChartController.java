package rsa.sp.lgo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import rsa.sp.lgo.service.admin.ChartService;

@RestController
@RequestMapping("/api/chart")
public class ChartController {
    @Autowired
    private ChartService chartService;

    @RequestMapping(path = "/pie-user", method = RequestMethod.GET)
    public ResponseEntity getChartPieUser() {
        return chartService.getPie();
    }

    @RequestMapping(path = "/bar-user", method = RequestMethod.GET)
    public ResponseEntity getChartBarUser() {
        return chartService.getBar();
    }
    @RequestMapping(path = "/pie-project", method = RequestMethod.GET)
    public ResponseEntity getPieProject() {
        return chartService.getPieProject();
    }
}
