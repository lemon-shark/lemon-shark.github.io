from collections import Counter, deque

class LRUCache:
    def __init__(self, capacity: int):
        self.map = dict()
        self.queue = deque()
        self.queue_cnt = Counter()
        self.cap = capacity
        
    def get(self, key: int) -> int:
        if key in self.map:
            self.queue.append(key)
            self.queue_cnt[key] += 1
            return self.map[key]
        return -1

    def put(self, key: int, value: int) -> None:
        self.map[key] = value
        if len(self.map) > self.cap:
            while self.queue and self.queue_cnt[self.queue[0]] > 1:
                self.queue_cnt[self.queue[0]] -= 1
                self.queue.popleft()
            lru_key = self.queue[0]
            self.queue.popleft()
            self.queue_cnt[lru_key] -=1
            #print('evict ', lru_key)
            del self.map[lru_key]
        self.queue.append(key)
        self.queue_cnt[key] += 1
