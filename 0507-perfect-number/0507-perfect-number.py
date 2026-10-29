class Solution(object):
    def checkPerfectNumber(self, num):
        if num <= 1:
            return False
        div_sum = 1
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                div_sum += i
                if i * i != num:
                    div_sum += num // i
        return div_sum == num