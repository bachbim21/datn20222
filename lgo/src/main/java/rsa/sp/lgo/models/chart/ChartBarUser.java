package rsa.sp.lgo.models.chart;

import java.math.BigDecimal;
import java.util.LinkedList;
import java.util.List;

public class ChartBarUser {
    private List<String> labels = new LinkedList<>();
    private List<BigDecimal> quantity = new LinkedList<>();

    public ChartBarUser() {
    }

    public List<String> getLabels() {
        return labels;
    }

    public void setLabels(String label) {
        this.labels.add(label);
    }

    public List<BigDecimal> getQuantity() {
        return quantity;
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity.add(quantity);
    }
}
