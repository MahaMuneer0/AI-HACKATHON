---
description: "Task list for Physical AI & Humanoid Robotics Textbook"
---

# Tasks: Physical AI & Humanoid Robotics Textbook

**Input**: Design documents from `/specs/001-ai-robotics-textbook/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Tests are not explicitly requested in the feature specification, so test tasks are omitted.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `.`, `node_modules/`, `package.json`, `docusaurus.config.js`, `sidebars.js`, `docs/`, `src/`, `static/`, `.github/workflows/deploy.yml`, `README.md` at repository root

## Phase 1: Setup (Environment & Repository Setup)

**Purpose**: Project initialization and basic structure

- [X] T001 Initialize a new GitHub repository (if not already done).
- [X] T002 Install Node.js and npm (if not already done).
- [X] T003 Create Docusaurus project `physical-ai-book` using `npx create-docusaurus@latest physical-ai-book classic` in the root directory.
- [X] T004 Configure project folder structure and prepare the `/docs` directory (verify Docusaurus setup).

---

## Phase 2: Foundational (Book Outline & Content Architecture)

**Purpose**: Core infrastructure for content and navigation that MUST be complete before ANY user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Create the full textbook outline (chapters, subchapters, modules) in a temporary file for Claude Code.
- [X] T006 Establish a standard chapter template including overview, core concepts, diagrams, example code, and exercises/labs in `docs/templates/chapter.md`.
- [X] T007 Configure `sidebars.js` to reflect the planned structure in `sidebars.js`.
- [X] T008 Create placeholder markdown files for each chapter based on the outline in `docs/` directory.

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Generate Complete Textbook (Priority: P1) 🎯 MVP

**Goal**: The system generates a complete textbook titled "Physical AI & Humanoid Robotics — A Modern Introductory Course" with multiple modules/chapters, each including theory, examples, diagrams, and exercises, following a unified template, so that a structured and consistent learning resource is available.

**Independent Test**: Trigger content generation and verify the output structure and initial content.

### Implementation for User Story 1

- [X] T009 [US1] Use Claude Code to generate detailed content for the first chapter, following `docs/templates/chapter.md`.
- [X] T010 [US1] Iteratively refine the generated content for the first chapter (draft → refine → finalize).
- [X] T011 [P] [US1] Add ASCII or tool-generated diagrams for the first chapter in `docs/chapter1/diagram.md`.
- [X] T012 [P] [US1] Add lab exercises and practical tasks for the first chapter in `docs/chapter1/exercises.md`.
- [X] T013 [US1] Ensure all content for the first chapter follows the unified writing style.
- [X] T014 [US1] Repeat T009-T013 for all remaining chapters.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Initialize Docusaurus Project & Content Integration (Priority: P1)

**Goal**: The textbook is presented as a functional Docusaurus website, with content integrated.

**Independent Test**: Initialize Docusaurus, generate content into `/docs`, verify `sidebars.js`, and local build.

### Implementation for User Story 2

- [X] T015 [US2] Insert completed content (generated in Phase 3) into the `docs/` directory.
- [X] T016 [US2] Update `docusaurus.config.js` for project metadata and theme settings in `docusaurus.config.js`.
- [ ] T017 [US2] Run local testing: `npm run start` and fix formatting, broken links, missing headings, etc.
- [ ] T018 [US2] Build production version: `npm run build`.
- [ ] T019 [US2] Review rendering, navigation, typography, and layout consistency.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Deploy to GitHub Pages (Priority: P2)

**Goal**: The textbook website is publicly accessible via a URL.

**Independent Test**: Verify successful deployment to GitHub Pages and access the site via its public URL.

### Implementation for User Story 3

- [ ] T020 [US3] Configure GitHub Pages deployment using GitHub Actions workflow in `.github/workflows/deploy.yml` (or `npm run deploy` if preferred).
- [ ] T021 [US3] Push all code and content to GitHub.
- [ ] T022 [US3] Verify final deployment URL for usability, responsiveness, and readability.

**Checkpoint**: All user stories implemented so far should be functional and publicly accessible.

---

## Phase 6: User Story 4 - AI-Assisted Content Refinement (Priority: P2)

**Goal**: Ensure high-quality and continuously improving content through iterative AI refinement.

**Independent Test**: Observe iterative generation and refinement process through Claude Code logs/outputs, and evaluate content quality.

### Implementation for User Story 4

- [ ] T023 [US4] Review generated content for accuracy and clarity, providing feedback for further Claude Code refinement.
- [ ] T024 [US4] Iteratively refine diagrams and exercises based on feedback.
- [ ] T025 [US4] Ensure consistency of writing style across all new content.

---

## Phase 7: User Story 5 - Include Documentation Assets (Priority: P3)

**Goal**: Improve maintainability and usability for collaborators and users with clear documentation.

**Independent Test**: Check for the existence and content of the `README.md` file.

### Implementation for User Story 5

- [ ] T026 [US5] Polish `README.md` with book's purpose, build instructions, deployment instructions, and toolchain overview in `README.md`.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and overall project quality.

- [ ] T027 Code cleanup and refactoring (if needed across the Docusaurus project).
- [ ] T028 Performance optimization across the Docusaurus site.
- [ ] T029 Security hardening for the Docusaurus site (if applicable).
- [ ] T030 Final review to ensure full alignment with Constitution + Specification.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after US1 completion (depends on content generation) and Foundational (Phase 2).
- **User Story 3 (P2)**: Can start after US2 completion (depends on functional Docusaurus site) and Foundational (Phase 2).
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - Ongoing refinement, can run in parallel with US1, US2, US3.
- **User Story 5 (P3)**: Can start after Foundational (Phase 2) - No direct dependencies on other stories, can run in parallel.

### Within Each User Story

- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks in Phase 1 (T001-T004) can run in parallel.
- All Foundational tasks in Phase 2 (T005-T008) can run in parallel.
- Once Foundational phase completes, User Story 4 and User Story 5 can start in parallel with US1, US2, US3 if team capacity allows.
- Within User Story 1 (Phase 3), tasks T011-T012 (diagrams, exercises for *different* chapters) can be parallelized.

---

## Parallel Example: User Story 1

```bash
# Launch content generation, diagram, and exercise creation for different chapters in parallel:
Task: "Generate detailed content for Chapter X in docs/chapterX/index.md"
Task: "Add ASCII or tool-generated diagrams for Chapter X in docs/chapterX/diagram.md"
Task: "Add lab exercises and practical tasks for Chapter X in docs/chapterX/exercises.md"
```

---

## Implementation Strategy

### MVP First (User Stories 1 & 2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. Complete Phase 4: User Story 2
5. **STOP and VALIDATE**: Test User Stories 1 & 2 independently
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 & 5 (can be interleaved or parallel)
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together.
2. Once Foundational is done:
   - Developer A: User Story 1 (Content Generation)
   - Developer B: User Story 2 (Docusaurus Integration, after A starts content)
   - Developer C: User Story 3 (Deployment, after B starts integration)
   - Developer D: User Story 4 (Continuous Refinement, parallel with other stories)
   - Developer E: User Story 5 (Documentation Assets, parallel with other stories)
3. Stories complete and integrate independently.

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence

