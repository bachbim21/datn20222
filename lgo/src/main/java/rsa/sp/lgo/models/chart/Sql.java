package rsa.sp.lgo.models.chart;

public class Sql {
    public static final String CHART_PIE = "select coalesce(SUM(a.active),0) as quantityActive, coalesce(SUM(a.inactive),0) as quantityInActive" +
            " from (" +
            " select count(u.id) as active, 0 as inactive from users u where u.active is true " +
            " union " +
            " select 0 as active, count(u.id) as inactive from users u where u.active is false ) a ";
    public static final String CHART_BAR = "select count(u.id) from users u where u.created >= :first and  u.created < :last ";
    public static final String CHART_NODE_PIE = "select coalesce(SUM(a.quantity1),0), MAX(a.tailwind), coalesce(SUM(a.quantity2),0), MAX(a.boot)  from (" +
            "select 'Tailwind' as tailwind, count(id) as quantity1, '' as boot,  0 as quantity2 from nodes n where n.tech_id in (1,3) " +
            " union " +
            " select '' as tailwind, 0 as quantity1, 'Bootstrap' as boot,  count(id) as quantity2 from nodes n where n.tech_id in (2,4) )  a"
            ;
 }
