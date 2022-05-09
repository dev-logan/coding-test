alp = 10
cop = 10
problems = [[10, 15, 2, 1, 2], [20, 20, 3, 3, 4]]

alp_target = max(map(lambda x: x[0], problems))
cop_target = max(map(lambda x: x[1], problems))

time = 0

while alp < alp_target or cop < cop_target:
    can_be_solved = []

    for problem in problems:
        if problem[0] <= alp and problem[1] <= cop:
            can_be_solved.append(problem)

    if can_be_solved == []:
        alp_min = min(map(lambda x: x[0], problems))
        cop_min = min(map(lambda x: x[1], problems))
        time += alp_min - alp + cop_min - cop
        alp = alp_min
        cop = cop_min
    else:
        eff_problems = []
        for problem in can_be_solved:
            alp_eff = problem[2] / problem[4]
            cop_eff = problem[3] / problem[4]
            total_eff = 0
            if alp < alp_target:
                total_eff += alp_eff
            if cop < cop_target:
                total_eff += cop_eff
            eff_problems.append((total_eff, problem))
        eff_problems.sort(reverse=True)
        problem_to_solve = eff_problems[0][1]
        # 만약 풀 문제의 효율이 1미만이라면 공부를 하는 것이 효율적
        alp += problem_to_solve[2]
        cop += problem_to_solve[3]
        time += problem_to_solve[4]
        
print(time)