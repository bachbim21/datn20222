package rsa.sp.lgo.utils;

import java.util.Collection;
import java.util.Iterator;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtils {
    public StringUtils() {
    }

    public static String toString(Collection<?> set) {
        String tmp = new String();
        if (set != null && set.size() > 0) {
            tmp = set.toString();
            tmp = tmp.replaceAll("\\[", "(").replace("]", ")");
        }

        return tmp;
    }

    public static String toStringSql(Set<String> set) {
        String tmp = new String();
        if (set != null && set.size() > 0) {
            StringBuilder result = new StringBuilder("(");
            int index = 0;

            for(Iterator var4 = set.iterator(); var4.hasNext(); ++index) {
                String s = (String)var4.next();
                if (index > 0) {
                    result.append(",");
                }

                result.append("'").append(s).append("'");
            }

            result.append(")");
            tmp = result.toString();
        }

        return tmp;
    }

    public static String toStringSql(String string) {
        if (string != null) {
            string = "'" + string + "'";
        }

        return string;
    }

    public static Boolean containSpecialCharacter(String text) {
        Pattern p = Pattern.compile("[^a-z0-9]", 2);
        Matcher m = p.matcher(text);
        return m.find();
    }
}
