package rsa.sp.lgo.models.chart;

import java.math.BigDecimal;

public class ChartPieUser {
    private BigDecimal quantityActive;
    private BigDecimal quantityInActive;
    private BigDecimal totalQuantity;

    public ChartPieUser() {
    }
    public ChartPieUser(Object o) {
        Object[] item = (Object[]) o;
        this.quantityActive = new BigDecimal(item[0].toString());
        this.quantityInActive = new BigDecimal(item[1].toString());
        this.totalQuantity = this.quantityActive.add(this.quantityInActive);
    }

    public ChartPieUser(BigDecimal quantityActive, BigDecimal quantityInActive, BigDecimal totalQuantity) {
        this.quantityActive = quantityActive;
        this.quantityInActive = quantityInActive;
        this.totalQuantity = quantityActive.add(quantityInActive);
    }

    public BigDecimal getQuantityActive() {
        return quantityActive;
    }

    public void setQuantityActive(BigDecimal quantityActive) {
        this.quantityActive = quantityActive;
    }

    public BigDecimal getQuantityInActive() {
        return quantityInActive;
    }

    public void setQuantityInActive(BigDecimal quantityInActive) {
        this.quantityInActive = quantityInActive;
    }

    public BigDecimal getTotalQuantity() {
        return totalQuantity;
    }

    public void setTotalQuantity(BigDecimal totalQuantity) {
        this.totalQuantity = totalQuantity;
    }
}
