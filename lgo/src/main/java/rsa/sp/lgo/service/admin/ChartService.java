package rsa.sp.lgo.service.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rsa.sp.lgo.models.chart.ChartBarUser;
import rsa.sp.lgo.models.chart.ChartPieNode;
import rsa.sp.lgo.models.chart.ChartPieUser;
import rsa.sp.lgo.repository.NodeRepository;
import rsa.sp.lgo.repository.UserRepository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.ZoneId;


@Service
public class ChartService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private NodeRepository nodeRepository;
    public ResponseEntity getPie() {
        Object result = userRepository.getChartPie();

        return ResponseEntity.ok(new ChartPieUser(result));
    }
    public ResponseEntity getBar()  {
        ChartBarUser result = new ChartBarUser();
        LocalDate currentDate = LocalDate.now();
        Long firstDayOfMonth;
        Long lastDayOfMonth;
        LocalDate firstTime;
        LocalDate lastTime;

        long step = 4;

        for (int i = 0; i < 5; i++) {
            firstTime = currentDate.minusMonths(step);
            lastTime = currentDate.minusMonths((step -1));
            firstDayOfMonth = firstTime.withDayOfMonth(1).atStartOfDay().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
            lastDayOfMonth = lastTime.withDayOfMonth(1).atStartOfDay().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
            BigDecimal count = userRepository.getChartBar(firstDayOfMonth, lastDayOfMonth);
            result.setLabels("Tháng "  + String.valueOf(firstTime.getMonthValue()));
            result.setQuantity(count);
            step --;
        }
        return ResponseEntity.ok(result);
    }
    public ResponseEntity getPieProject() {
        Object item =  nodeRepository.getPie();
        return ResponseEntity.ok(new ChartPieNode(item));
    }
    public ResponseEntity getBarProject() {
        ChartBarUser result = new ChartBarUser();
        LocalDate currentDate = LocalDate.now();
        Long firstDayOfMonth;
        Long lastDayOfMonth;
        LocalDate firstTime;
        LocalDate lastTime;

        long step = 4;

        for (int i = 0; i < 5; i++) {
            firstTime = currentDate.minusMonths(step);
            lastTime = currentDate.minusMonths((step -1));
            firstDayOfMonth = firstTime.withDayOfMonth(1).atStartOfDay().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
            lastDayOfMonth = lastTime.withDayOfMonth(1).atStartOfDay().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
            BigDecimal count = nodeRepository.getChartBar(firstDayOfMonth, lastDayOfMonth);
            result.setLabels("Tháng "  + String.valueOf(firstTime.getMonthValue()));
            result.setQuantity(count);
            step --;
        }
        return ResponseEntity.ok(result);
    }
}
