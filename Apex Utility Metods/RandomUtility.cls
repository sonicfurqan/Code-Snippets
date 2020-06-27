public class RandomUtility{
    public static string randomGUID(){
        String s = EncodingUtil.convertToHex(Crypto.generateAesKey(128));
        return    s.substring(0, 8) + '-'
                + s.substring(8, 12) + '-'
                + s.substring(12, 16) + '-'
                + s.substring(16, 20) + '-'
                + s.substring(20);
    }

    public static Integer randomNumber( Integer maxValue) {
        return Integer.valueOf(Math.random() * maxValue);
    }
 
    public static String randomString( Integer length) {
        String chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
        String result = '';
        while (result.length() < length) {
            Integer i = Math.mod(Math.abs(Crypto.getRandomInteger()), chars.length());
            result += chars.substring(i, i + 1);
        }
        return result;
    }

    public static String uniqueRandomHash(){
        String hashString = '1000' + String.valueOf(Datetime.now().formatGMT('yyyy-MM-dd HH:mm:ss.SSS'));
        Blob hash = Crypto.generateDigest('MD5', Blob.valueOf(hashString));
        String hexDigest = EncodingUtil.convertToHex(hash);
        return hexDigest;
    }

}
