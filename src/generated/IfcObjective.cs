/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcObjective : IfcConstraint 
	{
		public IfcObjective(IfcObjectiveBenchmarkValues benchmarkValues,
				IfcLogicalOperatorEnum logicalAggregator,
				Boolean logicalAggregatorSpecified,
				IfcObjectiveEnum objectiveQualifier,
				Boolean objectiveQualifierSpecified,
				String userDefinedQualifier,
				IfcConstraintCreatingActor creatingActor,
				String name,
				String description,
				IfcConstraintEnum constraintGrade,
				Boolean constraintGradeSpecified,
				String constraintSource,
				String creationTime,
				String userDefinedGrade) : base(creatingActor,
				name,
				description,
				constraintGrade,
				constraintGradeSpecified,
				constraintSource,
				creationTime,
				userDefinedGrade)
		{
			this.benchmarkValuesField = benchmarkValues;
			this.logicalAggregatorField = logicalAggregator;
			this.logicalAggregatorSpecifiedField = logicalAggregatorSpecified;
			this.objectiveQualifierField = objectiveQualifier;
			this.objectiveQualifierSpecifiedField = objectiveQualifierSpecified;
			this.userDefinedQualifierField = userDefinedQualifier;
		}
	}
}