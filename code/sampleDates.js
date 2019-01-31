// Docs:  https://bixbydevelopers.com/dev/docs/reference/JavaScriptAPI/dates
module.exports.function = function sampleDates (dateTimeExpression) {
  
  console.log('dateTimeExpression',dateTimeExpression);
  
  return dateTimeExpression;
 
}

function setStartAndEndDate(dateTimeExpression) {
  var whenStart;
  var whenEnd;
  
  if (dateTimeExpression.date) {
    whenStart = dates.ZonedDateTime.fromDate(dateTimeExpression.date);
    whenEnd = whenStart.withHour(23).withMinute(59).withSecond(59);
  }
  else if (dateTimeExpression.dateInterval) {
    whenStart = dates.ZonedDateTime.of(
      dateTimeExpression.dateInterval.start.year,
      dateTimeExpression.dateInterval.start.month,
      dateTimeExpression.dateInterval.start.day);
    whenEnd = dates.ZonedDateTime.of(
      dateTimeExpression.dateInterval.end.year,
      dateTimeExpression.dateInterval.end.month,
      dateTimeExpression.dateInterval.end.day,
      23, 59, 59);
  }
  else if (dateTimeExpression.dateTimeInterval) {
    whenStart = dates.ZonedDateTime.of(
      dateTimeExpression.dateTimeInterval.start.year,
      dateTimeExpression.dateTimeInterval.start.month,
      dateTimeExpression.dateTimeInterval.start.day,
      dateTimeExpression.dateTimeInterval.start.hour,
      dateTimeExpression.dateTimeInterval.start.minute,
      dateTimeExpression.dateTimeInterval.start.second);
    whenEnd = dates.ZonedDateTime.of(
      dateTimeExpression.dateTimeInterval.end.year,
      dateTimeExpression.dateTimeInterval.end.month,
      dateTimeExpression.dateTimeInterval.end.day,
      dateTimeExpression.dateTimeInterval.end.hour,
      dateTimeExpression.dateTimeInterval.end.minute,
      dateTimeExpression.dateTimeInterval.end.second);
  }

  return {
    start: whenStart.format('MM/dd/yyyy'),
    end: whenEnd.toIsoString()
  };
}