package bagels;
import java.util.HashMap;
import java.util.Map;





public class basket {
    private Map<String, Integer> bagelCount;
    private int capacity;

    public basket(int capacity) {
        this.capacity = capacity;
        this.bagelCount = new HashMap<>();
    }
    
    public boolean addBagel(String type) {
        int currentCount = bagelCount.getOrDefault(type, 0);
        int totalBagels = bagelCount.values().stream().mapToInt(Integer::intValue).sum();
        if (totalBagels < capacity) {
            bagelCount.put(type, currentCount + 1);
            return true;
        }
        return false;
    }
    
    public boolean removeBagel(String type) {
        int currentCount = bagelCount.getOrDefault(type, 0);
        if (currentCount > 0) {
            bagelCount.put(type, currentCount - 1);
            return true;
        }
        return false;
    }
    
    public void increaseCapacity(int additionalCapacity) {
        this.capacity += additionalCapacity;
    }
    
}
