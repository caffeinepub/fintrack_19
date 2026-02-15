import Array "mo:core/Array";
import List "mo:core/List";
import Map "mo:core/Map";
import Set "mo:core/Set";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type CategoryID = Nat;
  type RuleID = Nat;
  type BudgetID = Nat;
  type AlertID = Nat;
  type GoalID = Nat;
  type TransactionID = Nat;

  public type Rule = {
    id : RuleID;
    keyword : Text;
    category : CategoryID;
  };

  public type Transaction = {
    id : TransactionID;
    amount : Float;
    description : Text;
    timestamp : Time.Time;
    categoryId : ?CategoryID; // Category can be null if uncategorized
  };

  public type Category = {
    id : CategoryID;
    title : Text;
  };

  public type Budget = {
    id : BudgetID;
    name : Text;
    categoryId : ?CategoryID; // null means overall budget
    amount : Float;
    startDate : Time.Time;
    endDate : ?Time.Time;
  };

  public type BudgetAlert = {
    id : AlertID;
    budgetId : BudgetID;
    threshold : Float; // e.g., 0.8 for 80%
    triggered : Bool;
    read : Bool;
  };

  public type SavingsGoal = {
    id : GoalID;
    name : Text;
    targetAmount : Float;
    targetDate : ?Time.Time;
    currentAmount : Float;
  };

  module Transaction {
    public func compareByTimestamp(t1 : Transaction, t2 : Transaction) : Order.Order {
      Int.compare(t1.timestamp, t2.timestamp);
    };
  };

  var nextCategoryId = 1;
  var nextRuleId = 1;
  var nextBudgetId = 1;
  var nextAlertId = 1;
  var nextGoalId = 1;
  var nextTransactionId = 1;

  let userTransactions = Map.empty<Principal, Map.Map<TransactionID, Transaction>>();
  let userCategories = Map.empty<Principal, Map.Map<CategoryID, Category>>();
  let userRules = Map.empty<Principal, Map.Map<RuleID, Rule>>();
  let userBudgets = Map.empty<Principal, Map.Map<BudgetID, Budget>>();
  let userAlerts = Map.empty<Principal, Map.Map<AlertID, BudgetAlert>>();
  let userGoals = Map.empty<Principal, Map.Map<GoalID, SavingsGoal>>();

  public shared ({ caller }) func addTransaction(amount : Float, description : Text, timestamp : Time.Time, categoryId : ?CategoryID) : async TransactionID {
    if (amount == 0) {
      Runtime.trap("Transaction amount cannot be zero");
    };
    if (description == "") {
      Runtime.trap("Transaction description cannot be empty");
    };
    let transaction : Transaction = {
      id = nextTransactionId;
      amount;
      description;
      timestamp;
      categoryId;
    };

    let transactionsMap = switch (userTransactions.get(caller)) {
      case (null) {
        let newMap = Map.empty<TransactionID, Transaction>();
        userTransactions.add(caller, newMap);
        newMap;
      };
      case (?map) { map };
    };

    transactionsMap.add(transaction.id, transaction);
    nextTransactionId += 1;

    transaction.id;
  };

  public shared ({ caller }) func addCategory(title : Text) : async CategoryID {
    if (title == "") {
      Runtime.trap("Category title cannot be empty");
    };
    let categoryId = nextCategoryId;
    let category : Category = { id = categoryId; title };
    let categoriesMap = switch (userCategories.get(caller)) {
      case (null) {
        let newMap = Map.empty<CategoryID, Category>();
        userCategories.add(caller, newMap);
        newMap;
      };
      case (?map) { map };
    };
    categoriesMap.add(categoryId, category);
    nextCategoryId += 1;
    categoryId;
  };

  public shared ({ caller }) func addRule(keyword : Text, categoryId : CategoryID) : async RuleID {
    if (keyword == "") {
      Runtime.trap("Rule keyword cannot be empty");
    };
    // Check if the category exists
    let categoriesMap = switch (userCategories.get(caller)) {
      case (null) { Runtime.trap("User does not have any categories") };
      case (?map) { map };
    };

    if (not categoriesMap.containsKey(categoryId)) {
      Runtime.trap("Invalid category ID");
    };

    let ruleId = nextRuleId;
    let rule : Rule = { id = ruleId; keyword; category = categoryId };

    let rulesMap = switch (userRules.get(caller)) {
      case (null) {
        let newMap = Map.empty<RuleID, Rule>();
        userRules.add(caller, newMap);
        newMap;
      };
      case (?map) { map };
    };

    rulesMap.add(ruleId, rule);
    nextRuleId += 1;
    ruleId;
  };
};
