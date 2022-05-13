from bisect import bisect_right

n = 10
t = 60
m = 45
timetable = ["23:59","23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]

people = []
for time in timetable:
    hour, minute = map(int, time.split(":"))
    person = hour * 60 + minute
    people.append(person)

people.sort()

buses = []
bus = 540
for _ in range(n):
    buses.append(bus)
    bus += t

print("people", people)
print("buses", buses)

for i in range(n - 1):
    right = bisect_right(people, buses[i])
    people = people[min(m, right) :]

result = 0
final_people = people[:min(m, bisect_right(people, buses[-1]))]
print("final", final_people)
if len(final_people) < m:
    result = buses[-1]
else:
    result = final_people[-1] - 1
    
hour = result // 60
minute = result % 60

str_hour = str(hour) if hour >= 10 else '0' + str(hour)
str_minute = str(minute) if minute >= 10 else '0' + str(minute)

print(str_hour + ':' + str_minute)