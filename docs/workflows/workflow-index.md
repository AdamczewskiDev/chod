# Workflow Index

This document provides an index of all workflows available and used in the chod project.

## Workflow System

The BMAD (Business Model and Architecture Design) workflow system provides structured processes for:
- Project management
- Development workflows
- Documentation
- Quality assurance

## Available Workflows

### Initialization
- **workflow-init** - Initialize BMAD workflow system for a project
  - Location: `.cursor/rules/bmad/bmm/workflows/workflow-init.mdc`
  - Config: `.cursor/rules/bmad/bmm/workflows/workflow-status/init/workflow.yaml`
  - Status: In Progress

### Project Management
- **sprint-planning** - Plan and organize sprints
- **sprint-status** - Track sprint progress and status
- **retrospective** - Conduct sprint retrospectives

### Development
- **create-story** - Create user stories
- **dev-story** - Develop and implement stories
- **code-review** - Review code changes
- **quick-dev** - Quick development workflow

### Documentation
- **create-product-brief** - Create product briefs
- **create-prd** - Create Product Requirements Documents
- **create-tech-spec** - Create technical specifications
- **create-architecture** - Create architecture documentation
- **document-project** - Document project details
- **generate-project-context** - Generate project context

### Design
- **create-ux-design** - Create UX designs
- **create-excalidraw-*** - Create various Excalidraw diagrams

### Quality Assurance
- **check-implementation-readiness** - Check if implementation is ready
- **testarch-*** - Various testing architecture workflows

## Workflow Execution

Workflows are executed using the workflow.xml system located at:
`.cursor/rules/bmad/core/tasks/workflow.xml`

Each workflow has a corresponding YAML configuration file that defines:
- Steps and actions
- Outputs and templates
- Validation rules
- Halt conditions

## Workflow Artifacts

Workflow outputs are stored in:
- `docs/workflows/active/` - Active workflow artifacts
- `docs/workflows/archive/` - Completed workflow artifacts
- `docs/workflows/templates/` - Reusable workflow templates

## Getting Started

To use a workflow, reference it in your conversation:
- `@bmad/bmm/workflows/{workflow-name}`

For example:
- `@bmad/bmm/workflows/sprint-planning`
- `@bmad/bmm/workflows/create-story`

