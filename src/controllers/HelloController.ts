import { Request, Response } from 'express';

class HelloController {
  public async index(_req: Request, res: Response): Promise<Response> {
    return res.json({ message: 'Hello World!' });
  }
  public async show(req: Request, res: Response): Promise<Response> {
    return res.json({ requestId: req.params.id });
  }

  public async store(req: Request, res: Response): Promise<Response> {
    return res.json({ requestBody: req.body });
  }

  public async update(req: Request, res: Response): Promise<Response> {
    return res.json({ requestId: req.params.id, requestBody: req.body });
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    return res.json({ requestId: req.params.id });
  }
}

export default new HelloController();
