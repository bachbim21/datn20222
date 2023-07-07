package rsa.sp.lgo.utils;

//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//


import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.YearMonth;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public final class DateUtils {
    private static final Logger logger = LoggerFactory.getLogger(DateUtils.class);
    public static final Long ONE_DAY = 86400000L;
    public static final Long LESS_ONE_DAY = 86399999L;
    public static final Long OLD_DAY = 946659600000L;

    private DateUtils() {
    }

    public static String getCurrentDateTime() {
        return (new SimpleDateFormat("ddMMyyyyHHmmss")).format(Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh")).getTime());
    }

    public static Integer getDay(Long time) {
        Date date = new Date(time);
        Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        cal.setTime(date);
        return cal.get(5);
    }

    public static String toString(Long time, String pattern) {
        if (time != null) {
            Date date = new Date(time);
            Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
            cal.setTime(date);
            String day = Integer.toString(cal.get(5));
            if (cal.get(5) < 10) {
                day = 0 + day;
            }

            pattern = pattern.replace("dd", day);
            String month = Integer.toString(cal.get(2) + 1);
            if (cal.get(2) + 1 < 10) {
                month = 0 + month;
            }

            pattern = pattern.replace("MM", month);
            if (pattern.contains("yyyy")) {
                pattern = pattern.replace("yyyy", Integer.toString(cal.get(1)));
            } else if (pattern.contains("yy")) {
                String year = Integer.toString(cal.get(1));
                year = year.substring(year.length() - 2);
                pattern = pattern.replace("yy", year);
            }

            pattern = pattern.replace("HH", Integer.toString(cal.get(11)));
            pattern = pattern.replace("mm", Integer.toString(cal.get(12)));
            pattern = pattern.replace("ss", Integer.toString(cal.get(13)));
            return pattern;
        } else {
            return null;
        }
    }

    public static String toString(Long time) {
        if (time != null) {
            Date d = new Date(time);
            DateFormat f = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
            f.setTimeZone(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
            return f.format(d);
        } else {
            return null;
        }
    }

    public static String toString(Object time) {
        if (time != null) {
            try {
                String stringToConvert = String.valueOf(time);
                Long convertedLong = Long.parseLong(stringToConvert);
                Date d = new Date(convertedLong);
                DateFormat f = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
                f.setTimeZone(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
                return f.format(d);
            } catch (Exception var5) {
                return null;
            }
        } else {
            return null;
        }
    }

    public static Long toString(String dateTime, String pattern, int addition) {
        SimpleDateFormat f = new SimpleDateFormat(pattern);
        f.setTimeZone(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        Long time = null;

        try {
            Date d = f.parse(dateTime);
            f.setTimeZone(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
            if (addition != 0) {
                d = addDays(d, 1);
            }

            time = d.getTime();
            return time;
        } catch (ParseException var6) {
            return null;
        }
    }

    public static Long getCurrentDate() {
        Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        calendar.set(11, 0);
        calendar.set(12, 0);
        calendar.set(13, 0);
        calendar.set(14, 0);
        return calendar.getTime().getTime();
    }

    public static Long getDateByTime(Long time) {
        Date date = new Date(time);
        Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        calendar.setTime(date);
        calendar.set(11, 0);
        calendar.set(12, 0);
        calendar.set(13, 0);
        calendar.set(14, 0);
        return calendar.getTime().getTime();
    }

    public static Integer getMonth(Long time) {
        Date date = new Date(time);
        Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        cal.setTime(date);
        return cal.get(2) + 1;
    }

    public static Integer getYear(Long time) {
        Date date = new Date(time);
        Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        cal.setTime(date);
        return cal.get(1);
    }

    public static String getCurrentDateString() {
        Long today = getCurrentDate();
        return toString(today, "yyyy-MM-dd");
    }

    public static Date addDays(Date date, int days) {
        Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        cal.setTime(date);
        cal.add(5, days);
        return cal.getTime();
    }

    public static Long addMonth(Long time, int month) {
        Date date = new Date(time);
        Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        cal.setTime(date);
        cal.add(2, month);
        return cal.getTime().getTime();
    }

    public static Long nextMonth(Long time, int month) {
        Date date = new Date(time);
        Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        cal.setTime(date);
        cal.add(2, month);
        Long newTime = cal.getTime().getTime();
        Long firstDayOfMonth = getFirstDayOfMonth(newTime);
        return firstDayOfMonth;
    }

    public static Long nextYear(Long time, int year) {
        Date date = new Date(time);
        Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        cal.setTime(date);
        cal.add(1, year);
        Long newTime = cal.getTime().getTime();
        Long firstDayOfYear = getFirstDayOfYear(newTime);
        return firstDayOfYear;
    }

    public static Long getFirstDayOfYear(Integer year) {
        Calendar cal = Calendar.getInstance();
        cal.set(1, year);
        cal.set(6, 1);
        cal.set(11, 0);
        cal.set(12, 0);
        cal.set(13, 0);
        cal.set(14, 0);
        return cal.getTime().getTime();
    }

    public static Long getLastDayOfYear(Integer year) {
        Calendar cal = Calendar.getInstance();
        cal.set(1, year);
        cal.set(2, 11);
        cal.set(5, 31);
        cal.set(11, 23);
        cal.set(12, 59);
        cal.set(13, 59);
        cal.set(14, 999);
        return cal.getTime().getTime();
    }

    public static Integer getWeekOfYear(Long time) {
        Date date = new Date(time);
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        int weekOfYear = calendar.get(3);
        return weekOfYear;
    }

    public static Long getTimestamp(String date) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Date parsedDate = dateFormat.parse(date);
            Timestamp timestamp = new Timestamp(parsedDate.getTime());
            return timestamp.getTime();
        } catch (Exception var4) {
            return null;
        }
    }

    public static Long getLastDayOfMonth(Long time) {
        try {
            Date date = new Date(time);
            Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
            calendar.setTime(date);
            String month = Integer.toString(calendar.get(2) + 1);
            String year = Integer.toString(calendar.get(1));
            return getLastDayOfMonth(year, month);
        } catch (Exception var5) {
            return null;
        }
    }

    public static Long getLastDayOfMonth(String year, String month) {
        try {
            String date = year + "-" + month + "-01";
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
            cal.setTime(dateFormat.parse(date));
            int res = cal.getActualMaximum(5);
            String value = year + "-" + month + "-" + res;
            return getTimestamp(value);
        } catch (Exception var7) {
            return null;
        }
    }

    public static Long getFirstDayOfMonth(String year, String month) {
        try {
            String date = year + "-" + month + "-01";
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
            cal.setTime(dateFormat.parse(date));
            int res = cal.getActualMinimum(5);
            String value = year + "-" + month + "-" + res;
            return getTimestamp(value);
        } catch (Exception var7) {
            return null;
        }
    }

    public static Long getFirstDayOfMonth(Long time) {
        Date date = new Date(time);
        Calendar c = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        c.setTime(date);
        c.set(5, 1);
        return c.getTimeInMillis();
    }

    public static Long getLastDayOfLastMonth(Long time) {
        Date date = new Date(time);
        Calendar c = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        c.setTime(date);
        c.set(5, 0);
        return c.getTimeInMillis();
    }

    public static Long getFirstDayOfWeek(Long time) {
        Date date = new Date(time);
        Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        cal.setTime(date);
        cal.set(11, 0);
        cal.clear(12);
        cal.clear(13);
        cal.clear(14);
        cal.set(7, cal.getFirstDayOfWeek());
        return cal.getTimeInMillis() + ONE_DAY;
    }

    public static Long getFirstDayOfYear(Long time) {
        Date date = new Date(time);
        Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        cal.setTime(date);
        cal.set(2, 0);
        cal.set(5, 1);
        cal.set(11, 0);
        cal.clear(12);
        cal.clear(13);
        cal.clear(14);
        return cal.getTimeInMillis();
    }

    public static Integer getNumberDayOfMonth(Long time) {
        Date date = new Date(time);
        Calendar c = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        c.setTime(date);
        int month = c.get(2) + 1;
        int year = c.get(1);
        YearMonth yearMonthObject = YearMonth.of(year, month);
        return yearMonthObject.lengthOfMonth();
    }

    public static Long setHourAndMinute(Long time, Integer hour, Integer minute) {
        Date date = new Date(time);
        Calendar c = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        c.setTime(date);
        c.set(10, hour);
        c.set(12, minute);
        return c.getTimeInMillis();
    }


    public static String convertDateTime(Long time, String pattern) {
        if (time != null) {
            Date date = new Date(time);
            Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
            cal.setTime(date);
            String day = Integer.toString(cal.get(5));
            if (cal.get(5) < 10) {
                day = 0 + day;
            }

            pattern = pattern.replace("dd", day);
            String month = Integer.toString(cal.get(2) + 1);
            if (cal.get(2) + 1 < 10) {
                month = 0 + month;
            }

            pattern = pattern.replace("MM", month);
            if (pattern.contains("yyyy")) {
                pattern = pattern.replace("yyyy", Integer.toString(cal.get(1)));
            } else if (pattern.contains("yy")) {
                String year = Integer.toString(cal.get(1));
                year = year.substring(year.length() - 2);
                pattern = pattern.replace("yy", year);
            }

            pattern = pattern.replace("HH", Integer.toString(cal.get(11)));
            pattern = pattern.replace("mm", Integer.toString(cal.get(12)));
            pattern = pattern.replace("ss", Integer.toString(cal.get(13)));
            return pattern;
        } else {
            return null;
        }
    }

    public static Long getDayOfLastYear(Long time) {
        Date date = new Date(time);
        Integer lastYear = getYear(time) - 1;
        Calendar c = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        c.set(1, lastYear);
        c.set(2, date.getMonth());
        c.set(5, date.getDate());
        return c.getTimeInMillis();
    }

    public static Long getDayOfLastMonth(Long time) {
        Date date = new Date(time);
        Calendar c = Calendar.getInstance(TimeZone.getTimeZone("Asia/Ho_Chi_Minh"));
        c.setTime(date);
        c.add(2, -1);
        return c.getTimeInMillis();
    }

    public static Long getFirstDayOfQuarter(Long time) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeInMillis(time);
        int quarter = calendar.get(2) / 3 + 1;
        calendar.set(2, (quarter - 1) * 3);
        calendar.set(5, 1);
        return calendar.getTimeInMillis();
    }

    public static Long getLastDayOfQuarter(Long time) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeInMillis(time);
        int quarter = calendar.get(2) / 3 + 1;
        calendar.set(2, quarter * 3);
        calendar.set(5, 1);
        calendar.add(5, -1);
        return calendar.getTimeInMillis();
    }
}

