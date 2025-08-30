import { PrismaClient } from "../src/generated/prisma";
import { hashPassword } from "../src/services/auth";

const prisma = new PrismaClient();

async function main() {
	// Clean existing
	await prisma.applicationRequirement.deleteMany({});
	await prisma.application.deleteMany({});
	await prisma.studentParent.deleteMany({});
	await prisma.parent.deleteMany({});
	await prisma.student.deleteMany({});
	await prisma.university.deleteMany();

	// Universities with more details
	const universities = await Promise.all([
		prisma.university.create({ 
			data: { 
				name: "MIT", 
				country: "USA", 
				state: "MA",
				city: "Cambridge",
				usNewsRanking: 1,
				acceptanceRate: 0.067,
				applicationSystem: "Common App",
				tuitionInState: 55000,
				tuitionOutState: 55000,
				applicationFee: 75,
				deadlines: {
					early_decision: "2024-11-01",
					regular_decision: "2025-01-01"
				},

				raw: {
					website: "https://mit.edu",
					description: "Massachusetts Institute of Technology"
				}
			} 
		}),
		prisma.university.create({ 
			data: { 
				name: "Stanford University", 
				country: "USA", 
				state: "CA",
				city: "Stanford",
				usNewsRanking: 2,
				acceptanceRate: 0.043,
				applicationSystem: "Common App",
				tuitionInState: 56000,
				tuitionOutState: 56000,
				applicationFee: 90,
				deadlines: {
					early_action: "2024-11-01",
					regular_decision: "2025-01-02"
				},

				raw: {
					website: "https://stanford.edu",
					description: "Stanford University"
				}
			} 
		}),
		prisma.university.create({ 
			data: { 
				name: "Harvard University", 
				country: "USA", 
				state: "MA",
				city: "Cambridge",
				usNewsRanking: 3,
				acceptanceRate: 0.046,
				applicationSystem: "Common App",
				tuitionInState: 54000,
				tuitionOutState: 54000,
				applicationFee: 85,
				deadlines: {
					early_action: "2024-11-01",
					regular_decision: "2025-01-01"
				},

				raw: {
					website: "https://harvard.edu",
					description: "Harvard University"
				}
			} 
		}),
		prisma.university.create({ 
			data: { 
				name: "Yale University", 
				country: "USA", 
				state: "CT",
				city: "New Haven",
				usNewsRanking: 4,
				acceptanceRate: 0.059,
				raw: {
					website: "https://yale.edu",
					description: "Yale University"
				}
			} 
		}),
		prisma.university.create({ 
			data: { 
				name: "Princeton University", 
				country: "USA", 
				state: "NJ",
				city: "Princeton",
				usNewsRanking: 5,
				acceptanceRate: 0.058,
				raw: {
					website: "https://princeton.edu",
					description: "Princeton University"
				}
			} 
		}),
		prisma.university.create({ 
			data: { 
				name: "University of California, Berkeley", 
				country: "USA", 
				state: "CA",
				city: "Berkeley",
				usNewsRanking: 15,
				acceptanceRate: 0.144,
				raw: {
					website: "https://berkeley.edu",
					description: "UC Berkeley"
				}
			} 
		}),
		prisma.university.create({ 
			data: { 
				name: "University of Michigan", 
				country: "USA", 
				state: "MI",
				city: "Ann Arbor",
				usNewsRanking: 23,
				acceptanceRate: 20.2,
				raw: {
					website: "https://umich.edu",
					description: "University of Michigan"
				}
			} 
		}),
		prisma.university.create({ 
			data: { 
				name: "University of Toronto", 
				country: "Canada", 
				state: "ON",
				city: "Toronto",
				usNewsRanking: 18,
				acceptanceRate: 43.0,
				raw: {
					website: "https://utoronto.ca",
					description: "University of Toronto"
				}
			} 
		}),
		prisma.university.create({ 
			data: { 
				name: "University of British Columbia", 
				country: "Canada", 
				state: "BC",
				city: "Vancouver",
				usNewsRanking: 35,
				acceptanceRate: 52.4,
				raw: {
					website: "https://ubc.ca",
					description: "UBC"
				}
			} 
		}),
		prisma.university.create({ 
			data: { 
				name: "Imperial College London", 
				country: "UK", 
				state: "England",
				city: "London",
				usNewsRanking: 20,
				acceptanceRate: 14.3,
				raw: {
					website: "https://imperial.ac.uk",
					description: "Imperial College London"
				}
			} 
		})
	]);

	// Users
	const studentPwd = await hashPassword("student123");
	const parentPwd = await hashPassword("parent123");

	// Create multiple students
	const students = await Promise.all([
		prisma.student.create({
			data: {
				name: "Alice Zhang",
				email: "alice@example.com",
				passwordHash: studentPwd,
				graduationYear: 2025,
				gpa: 3.95,
				satScore: 1550,
				actScore: 35,
				targetCountries: { set: ["USA", "Canada"] },
				intendedMajors: { set: ["Computer Science", "Mathematics"] },
			},
		}),
		prisma.student.create({
			data: {
				name: "David Chen",
				email: "david@example.com",
				passwordHash: studentPwd,
				graduationYear: 2025,
				gpa: 3.88,
				satScore: 1480,
				actScore: 33,
				targetCountries: { set: ["USA", "UK"] },
				intendedMajors: { set: ["Engineering", "Physics"] },
			},
		}),
		prisma.student.create({
			data: {
				name: "Emma Wilson",
				email: "emma@example.com",
				passwordHash: studentPwd,
				graduationYear: 2025,
				gpa: 3.92,
				satScore: 1520,
				actScore: 34,
				targetCountries: { set: ["USA"] },
				intendedMajors: { set: ["Biology", "Chemistry"] },
			},
		})
	]);

	// Create multiple parents
	const parents = await Promise.all([
		prisma.parent.create({
			data: {
				name: "Li Wei",
				email: "parent1@example.com",
				passwordHash: parentPwd,
				phone: "1234567890",
			},
		}),
		prisma.parent.create({
			data: {
				name: "John Smith",
				email: "parent2@example.com",
				passwordHash: parentPwd,
				phone: "0987654321",
			},
		}),
		prisma.parent.create({
			data: {
				name: "Maria Garcia",
				email: "parent3@example.com",
				passwordHash: parentPwd,
				phone: "5551234567",
			},
		})
	]);

	// Create student-parent relationships
	await Promise.all([
		prisma.studentParent.create({
			data: { studentId: students[0].id, parentId: parents[0].id, relationship: "mother" },
		}),
		prisma.studentParent.create({
			data: { studentId: students[1].id, parentId: parents[1].id, relationship: "father" },
		}),
		prisma.studentParent.create({
			data: { studentId: students[2].id, parentId: parents[2].id, relationship: "mother" },
		})
	]);

	// Create applications with different statuses and types
	const applications = await Promise.all([
		// Alice's applications
		prisma.application.create({
			data: {
				studentId: students[0].id,
				universityId: universities[0].id, // MIT
				applicationType: "EARLY_DECISION",
				status: "SUBMITTED",
				deadline: new Date("2024-11-01"),
				submittedDate: new Date("2024-10-15"),
				syncedAt: new Date(),
			},
		}),
		prisma.application.create({
			data: {
				studentId: students[0].id,
				universityId: universities[1].id, // Stanford
				applicationType: "EARLY_ACTION",
				status: "IN_PROGRESS",
				deadline: new Date("2024-11-01"),
				syncedAt: new Date(),
			},
		}),
		prisma.application.create({
			data: {
				studentId: students[0].id,
				universityId: universities[2].id, // Harvard
				applicationType: "REGULAR_DECISION",
				status: "NOT_STARTED",
				deadline: new Date("2025-01-01"),
				syncedAt: new Date(),
			},
		}),
		prisma.application.create({
			data: {
				studentId: students[0].id,
				universityId: universities[5].id, // UC Berkeley
				applicationType: "REGULAR_DECISION",
				status: "IN_PROGRESS",
				deadline: new Date("2025-01-01"),
				syncedAt: new Date(),
			},
		}),
		// David's applications
		prisma.application.create({
			data: {
				studentId: students[1].id,
				universityId: universities[3].id, // Yale
				applicationType: "EARLY_DECISION",
				status: "UNDER_REVIEW",
				deadline: new Date("2024-11-01"),
				submittedDate: new Date("2024-10-20"),
				syncedAt: new Date(),
			},
		}),
		prisma.application.create({
			data: {
				studentId: students[1].id,
				universityId: universities[4].id, // Princeton
				applicationType: "REGULAR_DECISION",
				status: "NOT_STARTED",
				deadline: new Date("2025-01-01"),
				syncedAt: new Date(),
			},
		}),
		// Emma's applications
		prisma.application.create({
			data: {
				studentId: students[2].id,
				universityId: universities[6].id, // University of Michigan
				applicationType: "ROLLING_ADMISSION",
				status: "ACCEPTED",
				deadline: new Date("2024-12-01"),
				submittedDate: new Date("2024-11-15"),
				decisionDate: new Date("2024-12-15"),
				decisionType: "ACCEPTED",
				syncedAt: new Date(),
			},
		}),
		prisma.application.create({
			data: {
				studentId: students[2].id,
				universityId: universities[7].id, // University of Toronto
				applicationType: "REGULAR_DECISION",
				status: "WAITLISTED",
				deadline: new Date("2025-01-15"),
				submittedDate: new Date("2025-01-10"),
				decisionDate: new Date("2025-03-15"),
				decisionType: "WAITLISTED",
				syncedAt: new Date(),
			},
		})
	]);

	// Create application requirements with different statuses
	const requirements = [
		// MIT Application Requirements
		{ applicationId: applications[0].id, requirementType: "essay", status: "completed", deadline: new Date("2024-10-15") },
		{ applicationId: applications[0].id, requirementType: "recommendation", status: "completed", deadline: new Date("2024-10-15") },
		{ applicationId: applications[0].id, requirementType: "transcript", status: "completed", deadline: new Date("2024-10-15") },
		{ applicationId: applications[0].id, requirementType: "test_scores", status: "completed", deadline: new Date("2024-10-15") },
		{ applicationId: applications[0].id, requirementType: "portfolio", status: "completed", deadline: new Date("2024-10-15") },
		
		// Stanford Application Requirements
		{ applicationId: applications[1].id, requirementType: "essay", status: "in_progress", deadline: new Date("2024-11-01") },
		{ applicationId: applications[1].id, requirementType: "recommendation", status: "completed", deadline: new Date("2024-11-01") },
		{ applicationId: applications[1].id, requirementType: "transcript", status: "completed", deadline: new Date("2024-11-01") },
		{ applicationId: applications[1].id, requirementType: "test_scores", status: "completed", deadline: new Date("2024-11-01") },
		{ applicationId: applications[1].id, requirementType: "supplemental_essay", status: "not_started", deadline: new Date("2024-11-01") },
		
		// Harvard Application Requirements
		{ applicationId: applications[2].id, requirementType: "essay", status: "not_started", deadline: new Date("2025-01-01") },
		{ applicationId: applications[2].id, requirementType: "recommendation", status: "not_started", deadline: new Date("2025-01-01") },
		{ applicationId: applications[2].id, requirementType: "transcript", status: "not_started", deadline: new Date("2025-01-01") },
		{ applicationId: applications[2].id, requirementType: "test_scores", status: "not_started", deadline: new Date("2025-01-01") },
		{ applicationId: applications[2].id, requirementType: "interview", status: "not_started", deadline: new Date("2025-01-01") },
		
		// UC Berkeley Application Requirements
		{ applicationId: applications[3].id, requirementType: "essay", status: "in_progress", deadline: new Date("2025-01-01") },
		{ applicationId: applications[3].id, requirementType: "recommendation", status: "completed", deadline: new Date("2025-01-01") },
		{ applicationId: applications[3].id, requirementType: "transcript", status: "completed", deadline: new Date("2025-01-01") },
		{ applicationId: applications[3].id, requirementType: "test_scores", status: "completed", deadline: new Date("2025-01-01") },
		
		// Yale Application Requirements
		{ applicationId: applications[4].id, requirementType: "essay", status: "completed", deadline: new Date("2024-11-01") },
		{ applicationId: applications[4].id, requirementType: "recommendation", status: "completed", deadline: new Date("2024-11-01") },
		{ applicationId: applications[4].id, requirementType: "transcript", status: "completed", deadline: new Date("2024-11-01") },
		{ applicationId: applications[4].id, requirementType: "test_scores", status: "completed", deadline: new Date("2024-11-01") },
		{ applicationId: applications[4].id, requirementType: "interview", status: "completed", deadline: new Date("2024-11-01") },
		
		// Princeton Application Requirements
		{ applicationId: applications[5].id, requirementType: "essay", status: "not_started", deadline: new Date("2025-01-01") },
		{ applicationId: applications[5].id, requirementType: "recommendation", status: "not_started", deadline: new Date("2025-01-01") },
		{ applicationId: applications[5].id, requirementType: "transcript", status: "not_started", deadline: new Date("2025-01-01") },
		{ applicationId: applications[5].id, requirementType: "test_scores", status: "not_started", deadline: new Date("2025-01-01") },
		
		// University of Michigan Application Requirements
		{ applicationId: applications[6].id, requirementType: "essay", status: "completed", deadline: new Date("2024-12-01") },
		{ applicationId: applications[6].id, requirementType: "recommendation", status: "completed", deadline: new Date("2024-12-01") },
		{ applicationId: applications[6].id, requirementType: "transcript", status: "completed", deadline: new Date("2024-12-01") },
		{ applicationId: applications[6].id, requirementType: "test_scores", status: "completed", deadline: new Date("2024-12-01") },
		
		// University of Toronto Application Requirements
		{ applicationId: applications[7].id, requirementType: "essay", status: "completed", deadline: new Date("2025-01-15") },
		{ applicationId: applications[7].id, requirementType: "recommendation", status: "completed", deadline: new Date("2025-01-15") },
		{ applicationId: applications[7].id, requirementType: "transcript", status: "completed", deadline: new Date("2025-01-15") },
		{ applicationId: applications[7].id, requirementType: "test_scores", status: "completed", deadline: new Date("2025-01-15") }
	];

	await prisma.applicationRequirement.createMany({ data: requirements });

	console.log("Seed completed with rich data:");
	console.log(`- ${universities.length} universities`);
	console.log(`- ${students.length} students`);
	console.log(`- ${parents.length} parents`);
	console.log(`- ${applications.length} applications`);
	console.log(`- ${requirements.length} requirements`);
}

main().finally(async () => {
	await prisma.$disconnect();
});
