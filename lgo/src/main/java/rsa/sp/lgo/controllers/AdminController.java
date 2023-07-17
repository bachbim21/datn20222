package rsa.sp.lgo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import rsa.sp.lgo.service.admin.ChartService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private ChartService chartService;

    @RequestMapping(path = "/chart/pie-user", method = RequestMethod.GET)
    public ResponseEntity getChartPieUser() {
        return chartService.getPie();
    }
    @RequestMapping(path = "/chart/bar-user", method = RequestMethod.GET)
    public ResponseEntity getChartBarUser() {
        return chartService.getBar();
    }
    @RequestMapping(path = "/chart/pie-project", method = RequestMethod.GET)
    public ResponseEntity getPieProject() {
        return chartService.getPieProject();
    }
    @RequestMapping(path = "/chart/bar-project", method = RequestMethod.GET)
    public ResponseEntity getChartBarProject() {
        return chartService.getBarProject();
    }
}
