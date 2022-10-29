import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpenseService } from './expense.service';
import { ExpenseDocument } from './schemas/expense.schema';

@Controller('expense')
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}

  @Get()
  async findAll(): Promise<ExpenseDocument[] | null> {
    return await this.expenseService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
    @Res() res,
  ): Promise<ExpenseDocument | null> {
    const expense = await this.expenseService.findById(id);
    console.log(expense);
    if (!expense) throw new NotFoundException('Expense not found');
    return res.status(HttpStatus.OK).json({ expense: expense });
  }

  @Post('create')
  async create(
    @Body(new ValidationPipe()) createExpense: CreateExpenseDto,
    @Res() res,
  ): Promise<ExpenseDocument | null> {
    const createdExpense = await this.expenseService.create(createExpense);

    return res.status(HttpStatus.OK).json({
      message: `Expense ${createdExpense._id} created successfully`,
      expense: createdExpense,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateExpense: UpdateExpenseDto,
    @Res() res,
  ): Promise<ExpenseDocument | null> {
    const updatedExpense = await this.expenseService.update(id, updateExpense);

    if (!updatedExpense) throw new NotFoundException('Expense not found');
    return res.status(HttpStatus.OK).json({
      message: `Expense ${id} updated successfully`,
      expense: updatedExpense,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res) {
    const deletedExpense = await this.expenseService.delete(id);

    return res.status(HttpStatus.OK).json({
      message: `Expense ${id} deleted successfully`,
      expense: deletedExpense,
    });
  }
}
