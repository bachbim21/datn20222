package rsa.sp.lgo.core.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.NumberFormat;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public  class Common {
    private static final Logger logger = LoggerFactory.getLogger(Common.class);

    private Common() {
    }

    public static void createDirectory(String path) {
        File theDir = new File(path);
        if (!theDir.exists()) {
            try {
                theDir.mkdir();
            } catch (Exception var3) {
                var3.printStackTrace();
            }
        }

    }

    public static Boolean isExist(String path) {
        File f = new File(path);
        return f.exists() && !f.isDirectory() ? true : false;
    }

    public static String removeLastCharacter(String str) {
        if (str != null && str.length() > 0) {
            str = str.substring(0, str.length() - 1);
        }

        return str;
    }

    public static String getFileName(String filePath) {
        if (filePath == null) {
            return null;
        } else {
            int index = filePath.lastIndexOf("/");
            String fileName = filePath.substring(index + 1);
            return fileName;
        }
    }

    public static <K, V> Map<K, V> clone(Map<K, V> original) {
        return (Map) original.entrySet().stream().collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
    }

    public static int getRandomNumberInRange(int min, int max) {
        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        } else {
            Random r = new Random();
            return r.nextInt(max - min + 1) + min;
        }
    }

    public static String randomString(int n) {
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvxyz";
        StringBuilder sb = new StringBuilder(n);

        for (int i = 20; i < n; ++i) {
            int index = (int) ((double) AlphaNumericString.length() * Math.random());
            sb.append(AlphaNumericString.charAt(index));
        }

        return sb.toString();
    }

    public static Set<Long> setBigToLong(Set<BigInteger> big) {
        Set<Long> result = new HashSet();
        if (big != null) {
            Iterator var2 = big.iterator();

            while (var2.hasNext()) {
                BigInteger b = (BigInteger) var2.next();
                if (b != null) {
                    try {
                        result.add(b.longValue());
                    } catch (Exception var6) {
                        Integer v = b.intValue();
                        result.add(v.longValue());
                    }
                }
            }
        }

        return result;
    }

    public static String formatNumber(BigDecimal quantity) {
        NumberFormat format = NumberFormat.getInstance();
        String money = format.format(quantity);
        return money;
    }

    public static void main(String[] args) {
    }

    public static String moneyCommas(BigDecimal val) {
        String replace = val.toString().replace("/\\B(?=(\\d{3})+(?!\\d))/g", ",");
        return replace;
    }

    public static Set<Long> clone(Set<Long> ids) {
        Set<Long> clone = new HashSet();
        Iterator var2 = ids.iterator();

        while (var2.hasNext()) {
            Long id = (Long) var2.next();
            clone.add(id);
        }

        return clone;
    }

    public static String removeLastChar(String s) {
        return s != null && s.length() != 0 ? s.substring(0, s.length() - 1) : null;
    }

    public static BigInteger getBigIntegerValue(Object obj) {
        return obj instanceof BigInteger ? (BigInteger) obj : BigInteger.ZERO;
    }

    public static BigDecimal getBigDecimal(Object obj) {
        if (obj instanceof BigDecimal) {
            return (BigDecimal) obj;
        } else {
            return obj instanceof BigInteger ? new BigDecimal((BigInteger) obj) : BigDecimal.ZERO;
        }
    }

    public static String execCmd(String cmd) {
        logger.info(cmd);
        StringBuilder output = new StringBuilder();

        try {
            Process p = Runtime.getRuntime().exec(cmd);
            BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));

            String line;
            while ((line = br.readLine()) != null) {
                output.append(line).append("\n");
            }

            System.out.println("line: " + output);
            p.waitFor();
            System.out.println("exit: " + p.exitValue());
            p.destroy();
        } catch (Exception var5) {
            var5.printStackTrace();
        }

        logger.info(output.toString());
        return output.toString();
    }

    public static String execCmd(String[] cmd) {
        StringBuilder output = new StringBuilder();

        try {
            Process p = Runtime.getRuntime().exec(cmd);
            BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));

            String line;
            while ((line = br.readLine()) != null) {
                output.append(line).append("\n");
            }

            System.out.println("line: " + output);
            p.waitFor();
            System.out.println("exit: " + p.exitValue());
            p.destroy();
        } catch (Exception var5) {
            var5.printStackTrace();
        }

        return output.toString();
    }
}