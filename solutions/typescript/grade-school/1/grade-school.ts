export class GradeSchool {
  private students = new Map<number, Set<string>>();
  
  roster() {
    const sortedGrades = Array.from(this.students.keys()).sort((a, b) => a - b);
    const entries = sortedGrades.map(grade => {
      const nameSet = this.students.get(grade)!;
      const sortedNames = Array.from(nameSet).sort();
      return [grade, sortedNames] as const;
    });
    
    const activeEntries = entries.filter(([_, names]) => names.length > 0);
    return Object.fromEntries(activeEntries);
  }

  add(name: string, grade: number): void {
    for (const [existingGrade, nameSet] of this.students.entries()) {
      if (nameSet.has(name)) {
        nameSet.delete(name);
      }
    }
  
    if (!this.students.has(grade)) {
      this.students.set(grade, new Set());
    }
  
    this.students.get(grade)!.add(name);
  }

  grade(gradeNumber: number): string[] {
    const grade = this.students.get(gradeNumber);
    if (grade && grade.size > 0) {
      return Array.from(grade).sort();
    } else {
      return [];
    }
  }
}