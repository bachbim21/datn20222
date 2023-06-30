package rsa.sp.lgo.models.chart;

import java.math.BigDecimal;

public class ChartPieNode {
    private  String tailwind;
    private String bootstrap;
    private BigDecimal quantity1;
    private BigDecimal quantity2;

    public ChartPieNode() {
    }
    public ChartPieNode(Object item) {
        Object[] that = (Object[]) item;
        this.tailwind = that[1].toString();
        this.quantity1   =  new BigDecimal(that[0].toString());
        this.bootstrap = that[3].toString();
        this.quantity2   =  new BigDecimal(that[2].toString());
    }
    public String getTailwind() {
        return tailwind;
    }

    public void setTailwind(String tailwind) {
        this.tailwind = tailwind;
    }

    public String getBootstrap() {
        return bootstrap;
    }

    public void setBootstrap(String bootstrap) {
        this.bootstrap = bootstrap;
    }

    public BigDecimal getQuantity1() {
        return quantity1;
    }

    public void setQuantity1(BigDecimal quantity1) {
        this.quantity1 = quantity1;
    }

    public BigDecimal getQuantity2() {
        return quantity2;
    }

    public void setQuantity2(BigDecimal quantity2) {
        this.quantity2 = quantity2;
    }
}
