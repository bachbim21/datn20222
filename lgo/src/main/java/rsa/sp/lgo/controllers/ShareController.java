package rsa.sp.lgo.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rsa.sp.lgo.core.CrudApiEndpoint;
import rsa.sp.lgo.core.SecurityUtils;
import rsa.sp.lgo.models.Share;
import rsa.sp.lgo.service.ShareService;

import java.util.Set;


@RestController
@RequestMapping("/api/share")
public class ShareController extends CrudApiEndpoint<Share, Long> {
    private ShareService shareService;

    public ShareController(ShareService service) {
        super(service);
        this.shareService = service;
        this.baseUrl = "/api/share";
    }
    @RequestMapping(value = "/{userId}/{nodeId}", method = RequestMethod.POST)
    public ResponseEntity update(@PathVariable(value = "userId") Long userId,@PathVariable(value = "nodeId") Long nodeId, @RequestBody Set<String> list) {
        return shareService.createShare(userId, nodeId, list);
    }
}
