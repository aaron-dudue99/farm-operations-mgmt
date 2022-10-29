import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpenseDocument } from './schemas/expense.schema';

/*TODO: 👉🏾 Create a new expense and save in database            ✅    
        👉🏾 Validate expense info from request before saving in database ✅
        👉🏾 Search/ Get an expense by ID                          ✅
        👉🏾 Get an expense by name                                ✅
        👉🏾 Get all expenses from database                       ✅ 
        👉🏾 Update an expense                                     ✅
        👉🏾 Delete an expense --------------------------------    ✅
        👉🏾 Handle exceptions and return to the calling client   
*/
@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel('Expense')
    private readonly expenseModel: Model<ExpenseDocument>,
  ) {}

  async findAll(): Promise<ExpenseDocument[]> {
    return this.expenseModel.find();
  }

  async findById(id: string): Promise<ExpenseDocument | null> {
    return this.expenseModel.findById(id);
  }

  async findByName(name: string): Promise<ExpenseDocument | null> {
    return this.expenseModel.findOne({ name: name });
  }

  async create(expense: CreateExpenseDto): Promise<ExpenseDocument | null> {
    const createdExp = await new this.expenseModel(expense);
    return createdExp.save();
  }

  async update(
    id: string,
    updateExpense: UpdateExpenseDto,
  ): Promise<ExpenseDocument | null> {
    const updatedExpense = await this.expenseModel.findByIdAndUpdate(
      id,
      updateExpense,
      { new: true },
    );

    return updatedExpense;
  }

  async delete(id: string): Promise<any> {
    const deletedExpense = await this.expenseModel.findByIdAndDelete(id);
    return deletedExpense;
  }
}
